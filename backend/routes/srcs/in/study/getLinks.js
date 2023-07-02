const { dbCatch, ErrorHandler } = require('../../../error')
const Study_Link = require('../../../Schemas/googlesheet_link')
const asyncHandler = require('express-async-handler')

/**
 * @api {get} /study/links get form link
 * @apiName getLink
 * @apiGroup In/study
 * @apiDescription 拿取本年表單連結
 *
 *
 * @apiSuccess (201) {String} senior 學長姊表單連結
 * @apiSuccess (201) {String} junior 學弟妹表單連結
 * @apiSuccess (201) {String} note 備註
 *
 * @apiError (500) {String} description 資料庫錯誤
 * @apiError (404) {String} description not found
 * @apiError (403) {String} description server not open yet
 *
 */
module.exports = asyncHandler(async (req, res) => {
  const doc = await Study_Link.findOne({ id: 1 })
  if (!doc) throw new ErrorHandler(404, 'not found')
  // const now = new Date()
  const { senior, junior, publishTime, note } = doc
  // if (now < publishTime) throw new ErrorHandler(403, 'server not open yet')
  res.send({ senior, junior, note })
})
