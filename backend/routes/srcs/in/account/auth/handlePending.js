const { dbCatch, ErrorHandler } = require('../../../../error')
const Login = require('../../../../Schemas/user_login')
const Pending = require('../../../../Schemas/user_pending')
const Visual = require('../../../../Schemas/user_visual_new')
const asyncHandler = require('express-async-handler')
const sendmail = require('../../../../middleware/mail')

/**
 * @api {post} /handlePending validating identity
 * @apiName handlePending
 * @apiGroup In/account
 * @apiDescription 身分驗證
 *
 * @apiparam {String} account 學號
 * @apiparam {Boolean} acceptUser 是否接受此使用者
 *
 * @apiSuccess (204) -
 *
 * @apiError (404) {String} description user not found
 * @apiError (500) {String} description 資料庫錯誤
 */
const manage = async (req, res, next) => {
  const { account, acceptUser } = req.body
  const { username, userpsw, facebookID, email } = await Pending.findOne({ account }).catch(dbCatch)
  if (!username) throw new ErrorHandler(404, 'user not found')
  if (!acceptUser) {
    await Pending.deleteMany({ account }).catch(dbCatch)
  } else {
    const { _id: visualID } = await Visual({
      username,
      account,
      publicEmail: email,
    })
      .save()
      .catch(dbCatch)
    await Login({ username, account, facebookID, userpsw, visual: visualID })
      .save()
      .catch(async (e) => {
        await Visual.deleteOne({ _id: visualID }).catch(dbCatch)
        throw new ErrorHandler(500, '資料庫錯誤')
      })
    await Pending.deleteMany({ account }).catch(dbCatch)
  }

  const template = require('../mailTemplate/template_generator')
  const link = `${req.protocol}://${process.env.WEB_DOMAIN}/home`
  const htmlText = await template(link, acceptUser)
  await sendmail(email, 'eeplus website account activaiton', htmlText).catch((e) => {
    console.log(e)
    throw new ErrorHandler(400, 'sendemail fail')
  })

  return res.send({ email, account })
}

const valid = require('../../../../middleware/validation')
const rules = ['account', { filename: 'required', type: 'bool', field: 'acceptUser' }]
module.exports = [valid(rules), asyncHandler(manage)]
