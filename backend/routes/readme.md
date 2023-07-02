<a name="top"></a>

# EEplus website api v1.0.0

EE+ api 文件

- [In/abroadInfo](#inabroadinfo)
  - [add abroadInfo](#add-abroadinfo)
  - [delete abroadInfo](#delete-abroadinfo)
  - [get abroadInfo](#get-abroadinfo)
  - [update abroadInfo](#update-abroadinfo)
- [In/account](#inaccount)
  - [add grade](#add-grade)
  - [add member in charge](#add-member-in-charge)
  - [add or del admin](#add-or-del-admin)
  - [del member in charge](#del-member-in-charge)
  - [delete grade](#delete-grade)
  - [delete user](#delete-user)
  - [reset password](#reset-password)
  - [show private personal info](#show-private-personal-info)
  - [update grade](#update-grade)
  - [update member in charge](#update-member-in-charge)
  - [validating identity](#validating-identity)
  - [view pending accounts](#view-pending-accounts)
- [In/announcement](#inannouncement)
  - [add announcement](#add-announcement)
  - [delete announcement](#delete-announcement)
  - [get announcement](#get-announcement)
  - [search announcement by field](#search-announcement-by-field)
  - [search announcement by keywords](#search-announcement-by-keywords)
  - [update announcement](#update-announcement)
- [In/career](#incareer)
  - [add recruitment](#add-recruitment)
  - [delete recruitment](#delete-recruitment)
  - [search recruitment by field](#search-recruitment-by-field)
  - [search recruitment by keywords](#search-recruitment-by-keywords)
  - [show all recruitment](#show-all-recruitment)
  - [show my recruitment](#show-my-recruitment)
  - [update recruitment](#update-recruitment)
- [In/column](#incolumn)
  - [add column](#add-column)
  - [delete column](#delete-column)
  - [get column detail](#get-column-detail)
  - [get column outline with id optional](#get-column-outline-with-id-optional)
  - [search column by keywords or hashtags](#search-column-by-keywords-or-hashtags)
  - [update column](#update-column)
- [In/profile_new](#inprofile_new)
  - [search profile by fields](#search-profile-by-fields)
  - [search profile by keywords](#search-profile-by-keywords)
  - [show my profile](#show-my-profile)
  - [update profile](#update-profile)
- [In/recent](#inrecent)
  - [get recent announcement](#get-recent-announcement)
  - [get recent column](#get-recent-column)
  - [get recent recommendation](#get-recent-recommendation)
- [In/recommendation](#inrecommendation)
  - [add recommendation](#add-recommendation)
  - [delete recommendation](#delete-recommendation)
  - [search recommendation by field](#search-recommendation-by-field)
  - [search recommendation by keywords](#search-recommendation-by-keywords)
  - [show my recommendation](#show-my-recommendation)
  - [update recommendation](#update-recommendation)
- [In/study](#instudy)
  - [add form link](#add-form-link)
  - [get form link](#get-form-link)
  - [pairing](#pairing)
  - [sent pairing notification](#sent-pairing-notification)
- [Out/account](#outaccount)
  - [accountActivate](#accountactivate)
  - [isLogin](#islogin)
  - [login](#login)
  - [loginFB](#loginfb)
  - [logout](#logout)
  - [register](#register)
  - [registerFB](#registerfb)
  - [registerStep2](#registerstep2)
- [Out/contact](#outcontact)
  - [get in touch](#get-in-touch)
- [Out/forget](#outforget)
  - [activation](#activation)
  - [forget](#forget)
- [Out/publicData](#outpublicdata)
  - [get head&#39;s image](#get-head's-image)
  - [get list of heads](#get-list-of-heads)
  - [get list of persons in charge](#get-list-of-persons-in-charge)
- [Out/recent](#outrecent)
  - [get recent recruitment](#get-recent-recruitment)

---

# In/abroadInfo

## add abroadInfo

[Back to top](#top)

新增留學資訊

```
POST /addAbroadInfo
```

### Parameters - `Parameter`

| Name  | Type     | Description    |
| ----- | -------- | -------------- |
| title | `String` | 學校名稱       |
| info  | `String` | 學校資料超連結 |
| file  | `File`   | 學校校徽       |

### Success response

#### Success response - `201`

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| title | `String` | title       |
| \_id  | `String` | \_id        |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete abroadInfo

[Back to top](#top)

用\_id 刪除留學資訊

```
DELETE /deleteAbroadInfo
```

### Parameters - `Parameter`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \_id | `String` | 要刪除的    |

### Success response

#### Success response - `200`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      | <li></li>   |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get abroadInfo

[Back to top](#top)

拿留學資訊

```
POST /getAbroadInfo
```

### Success response

#### Success response - `201`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| iconSrc | `String` | 圖片        |
| title   | `String` | title       |
| info    | `String` | info        |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update abroadInfo

[Back to top](#top)

給\_id 更新留學資訊

```
POST /updateAbroadInfo
```

### Parameters - `Parameter`

| Name  | Type     | Description    |
| ----- | -------- | -------------- |
| \_id  | `String` | \_id           |
| title | `String` | 學校名稱       |
| info  | `String` | 學校資料超連結 |
| file  | `File`   | 學校校徽       |

### Success response

#### Success response - `200`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `403`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | \_id not given |

#### Error response - `404`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料不存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/account

## add grade

[Back to top](#top)

新增一年資料(部長歷史清單)

```
POST /history
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name               | Type     | Description                          |
| ------------------ | -------- | ------------------------------------ |
| grade              | `String` | 年級                                 |
| title              | `String` | 標題                                 |
| peopleImages       | `File[]` | 檔案(頭像)                           |
| &ensp;originalname | `String` | ${姓名}.${file extension}(file name) |

### Success response

#### Success response - `201`

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| grade |      | 年級           |
| \_id  |      | mongoDB 的\_id |

### Error response

#### Error response - `500`

| Name        | Type     | Description         |
| ----------- | -------- | ------------------- |
| description | `String` | 資料庫/資料格式錯誤 |

## add member in charge

[Back to top](#top)

新增負責人清單成員

```
POST /teamData
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name  | Type     | Description        |
| ----- | -------- | ------------------ |
| name  | `String` | 姓名               |
| job   | `String` | 職稱               |
| index | `String` | 順序(非負整數字串) |
| img   | `File`   | 檔案(頭像)         |

### Success response

#### Success response - `201`

| Name | Type | Description    |
| ---- | ---- | -------------- |
| \_id |      | mongoDB 的\_id |

### Error response

#### Error response - `500`

| Name        | Type     | Description         |
| ----------- | -------- | ------------------- |
| description | `String` | 資料庫/資料格式錯誤 |

## add or del admin

[Back to top](#top)

新增、刪除管理員

```
POST /manageAuth
```

### Parameters - `Parameter`

| Name    | Type      | Description                                       |
| ------- | --------- | ------------------------------------------------- |
| account | `String`  | 學號                                              |
| setAuth | `Boolean` | true:加成管理員；false:從管理員移除(可以移除自己) |

### Success response

#### Success response - `204`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## del member in charge

[Back to top](#top)

刪除負責人清單成員

```
DELETE /teamData
```

### Parameters - `Parameter`

| Name | Type     | Description             |
| ---- | -------- | ----------------------- |
| \_id | `String` | get 或 add 時回傳的\_id |

### Success response

#### Success response - `200`

| Name | Type | Description |
| ---- | ---- | ----------- |
| name |      | name        |

### Error response

#### Error response - `404`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | not valid \_id |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete grade

[Back to top](#top)

刪除年級(部長歷史清單)

```
DELETE /history
```

### Parameters - `Parameter`

| Name | Type     | Description             |
| ---- | -------- | ----------------------- |
| \_id | `String` | get 或 add 時回傳的\_id |

### Success response

#### Success response - `200`

| Name  | Type | Description |
| ----- | ---- | ----------- |
| grade |      | grade       |

### Error response

#### Error response - `404`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | not valid \_id |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete user

[Back to top](#top)

刪除使用者

```
POST /delUser
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| account | `String` | 帳號        |

### Success response

#### Success response - `200`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| account | `String` | account     |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## reset password

[Back to top](#top)

重設密碼

```
POST /chPassword
```

### Parameters - `Parameter`

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| oldPsw | `String` | 原本密碼    |
| newPsw | `String` | 新密碼      |

### Success response

#### Success response - `204`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `401`

| Name        | Type     | Description  |
| ----------- | -------- | ------------ |
| description | `String` | 原始密碼錯誤 |

#### Error response - `404`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號不存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## show private personal info

[Back to top](#top)

顯示機密資料(不想被別人看到的部份，暫無)

```
POST /showPersonal
```

### Success response

#### Success response - `201`

| Name     | Type | Description |
| -------- | ---- | ----------- |
| username |      | 使用者名字  |
| account  |      | 使用者學號  |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update grade

[Back to top](#top)

更新一年資料(部長歷史清單)

```
PATCH /history
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name               | Type     | Description                          |
| ------------------ | -------- | ------------------------------------ |
| \_id               | `String` | get 或 add 時回傳的\_id              |
| grade              | `String` | 年級                                 |
| title              | `String` | 標題                                 |
| peopleImages       | `File[]` | 檔案(頭像)                           |
| &ensp;originalname | `String` | ${姓名}.${file extension}(file name) |

### Success response

#### Success response - `201`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      | <li></li>   |

### Error response

#### Error response - `404`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | not valid \_id |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update member in charge

[Back to top](#top)

更新負責人清單成員

```
PATCH /teamData
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name  | Type     | Description             |
| ----- | -------- | ----------------------- |
| \_id  | `String` | get 或 add 時回傳的\_id |
| name  | `String` | 姓名                    |
| job   | `String` | 職稱                    |
| index | `String` | 順序(非負整數字串)      |
| img   | `File`   | 檔案(頭像)              |

### Success response

#### Success response - `201`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      | <li></li>   |

### Error response

#### Error response - `404`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | not valid \_id |

#### Error response - `500`

| Name        | Type     | Description         |
| ----------- | -------- | ------------------- |
| description | `String` | 資料庫/資料格式錯誤 |

## validating identity

[Back to top](#top)

身分驗證

```
POST /handlePending
```

### Parameters - `Parameter`

| Name       | Type      | Description      |
| ---------- | --------- | ---------------- |
| account    | `String`  | 學號             |
| acceptUser | `Boolean` | 是否接受此使用者 |

### Success response

#### Success response - `204`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `404`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | user not found |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## view pending accounts

[Back to top](#top)

查看待核可帳號

```
POST /showPending
```

### Parameters - `Parameter`

| Name | Type | Description |
| ---- | ---- | ----------- |
| x    | `x`  | x           |

### Success response

#### Success response - `200`

| Name           | Type       | Description |
| -------------- | ---------- | ----------- |
| pendings       | `Object[]` | 各個帳號    |
| &ensp;username | `String`   | 名字        |
| &ensp;account  | `String`   | 學號        |
| &ensp;email    | `String`   | 信箱        |
| &ensp;imgSrc   | `String`   | 證件照      |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/announcement

## add announcement

[Back to top](#top)

管理員新增公告

```
POST /announcement/add
```

### Parameters - `Parameter`

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| title | `String` | 公告標題    |
| date  | `String` | yyyy/mm/dd  |
| body  | `String` | 公告內容    |

### Success response

#### Success response - `201`

| Name         | Type     | Description |
| ------------ | -------- | ----------- |
| successfully | `String` | add ann     |

### Error response

#### Error response - `400`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | id is required |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete announcement

[Back to top](#top)

管理員刪除公告

```
DELETE /announcement/delete
```

### Parameters - `Parameter`

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| id   | `String` | 文章的編號 (建議 yymm) |

### Success response

#### Success response - `201`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \_id | `String` | post 的\_id |

### Error response

#### Error response - `400`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | id is required |

## get announcement

[Back to top](#top)

拿一筆公告

```
GET /announcement
```

### Parameters - `Parameter`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \_id | `String` | (required)  |

### Error response

#### Error response - `404`

| Name        | Type     | Description               |
| ----------- | -------- | ------------------------- |
| description | `String` | id is required/資料不存在 |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search announcement by field

[Back to top](#top)

指定欄位搜尋公告

```
POST /searchAnnouncement
```

### Parameters - `Parameter`

| Name    | Type     | Description         |
| ------- | -------- | ------------------- |
| \_id    | `String` | \_id (optional)     |
| title   | `String` | 公告標題 (optional) |
| date    | `String` | 公告日期 (optional) |
| page    | `Number` | default 1           |
| perpage | `Number` | default 20          |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search announcement by keywords

[Back to top](#top)

用空格區分關鍵字進行搜尋

```
POST /smartsearchAnnouncement
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| keyword | `String` | 用空格區分  |

### Success response

#### Success response - `201`

| Name        | Type     | Description              |
| ----------- | -------- | ------------------------ |
| &ensp;\_id  | `String` | mongodb \_id(for delete) |
| &ensp;title | `Object` | 標題                     |
| &ensp;date  | `Object` | 日期                     |
| &ensp;body  | `Object` | 內容                     |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update announcement

[Back to top](#top)

更新一筆公告

```
PATCH /announcement
```

### Parameters - `Parameter`

| Name  | Type     | Description               |
| ----- | -------- | ------------------------- |
| \_id  | `String` | 要更新公告的 mongodb \_id |
| title | `String` | 公告標題(optional)        |
| body  | `String` | 公告內容(optional)        |
| date  | `String` | 公告時間(optional)        |

### Success response

#### Success response - `203`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      | <li></li>   |

### Error response

#### Error response - `404`

| Name        | Type     | Description     |
| ----------- | -------- | --------------- |
| description | `String` | \_id not exists |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/career

## add recruitment

[Back to top](#top)

新增一筆職缺

```
POST /addRecruitment
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name         | Type       | Description         |
| ------------ | ---------- | ------------------- |
| title        | `String`   | 職缺標題            |
| company_name | `String`   | 公司名稱            |
| work_type    | `String`   | 職位(ex.前端工程師) |
| salary       | `String`   | 薪資                |
| experience   | `String[]` | 經驗要求            |
| diploma      | `String`   | 學系要求            |
| requirement  | `String[]` | 技能要求            |
| description  | `String[]` | 其他描述            |
| file         | `File`     | 照片                |

### Success response

#### Success response - `201`

| Name | Type | Description                         |
| ---- | ---- | ----------------------------------- |
| data |      | 職缺標題                            |
| \_id |      | 職缺\_id(用來 search,update,delete) |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete recruitment

[Back to top](#top)

用\_id 刪除職缺

```
DELETE /deleteRecruitment
```

### Parameters - `Parameter`

| Name | Type     | Description               |
| ---- | -------- | ------------------------- |
| \_id | `String` | 要刪除職缺的 mongodb \_id |

### Success response

#### Success response - `200`

| Name | Type | Description  |
| ---- | ---- | ------------ |
| data |      | 刪除職缺標題 |

### Error response

#### Error response - `403`

| Name        | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| description | `String` | not authorized(僅建立者與管理員可以刪除) |

#### Error response - `404`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | \_id not found |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search recruitment by field

[Back to top](#top)

指定欄位搜尋職缺

```
POST /searchRecruitment
```

### Parameters - `Parameter`

| Name         | Type     | Description         |
| ------------ | -------- | ------------------- |
| \_id         | `String` | \_id (optional)     |
| account      | `String` | 學號 (optional)     |
| title        | `String` | 職缺標題 (optional) |
| company_name | `String` | 公司名稱 (optional) |
| work_type    | `String` | 職位 (optional)     |
| salary       | `String` | 薪資 (optional)     |
| experience   | `String` | 經驗要求 (optional) |
| diploma      | `String` | 學系要求 (optional) |
| requirement  | `String` | 技能要求 (optional) |
| description  | `String` | 其他描述 (optional) |
| page         | `Number` | default 1           |
| perpage      | `Number` | default 20          |

### Success response example

#### Success response example - `Success-Response:`

```json
[
  {
    "_id": "String",
    "title": {
      "title": "String",
      "company_name": "String",
      "work_type": "String"
    },
    "info": {
      "salary": "String",
      "experience": ["String"],
      "diploma": "String"
    },
    "spec": {
      "requirement": ["String"],
      "description": "String"
    },
    "image": "String"
  }
]
```

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search recruitment by keywords

[Back to top](#top)

用空格區分關鍵字進行搜尋

```
POST /smartsearchRecruitment
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| keyword | `String` | 用空格區分  |

### Success response

#### Success response - `201`

| Name                     | Type       | Description                                         |
| ------------------------ | ---------- | --------------------------------------------------- |
| -                        | `Object[]` | 職缺們                                              |
| &ensp;\_id               | `String`   | mongodb \_id(for delete)                            |
| &ensp;title              | `Object`   | 標題相關                                            |
| &ensp;&ensp;title        | `String`   | 標題                                                |
| &ensp;&ensp;company_name | `String`   | 公司名稱                                            |
| &ensp;&ensp;work_type    | `String`   | 職位(ex.前端工程師)                                 |
| &ensp;info               | `Object`   | 工作資訊                                            |
| &ensp;&ensp;salary       | `String`   | 薪資                                                |
| &ensp;&ensp;experience   | `String[]` | 經驗要求                                            |
| &ensp;&ensp;diploma      | `String`   | 學院要求                                            |
| &ensp;spec               | `Object`   | 詳細描述                                            |
| &ensp;&ensp;requirement  | `String[]` | 技能要求                                            |
| &ensp;&ensp;description  | `String[]` | 工作的其他描述                                      |
| &ensp;image              | `String`   | 公司頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## show all recruitment

[Back to top](#top)

顯示所有職缺(等價於不傳任何參數的 searchRecruitment)

```
POST /showRecruitment
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| page    | `Number` | default 1   |
| perpage | `Number` | default 20  |

### Success response

#### Success response - `201`

| Name                     | Type       | Description                                         |
| ------------------------ | ---------- | --------------------------------------------------- |
| -                        | `Object[]` | 職缺們                                              |
| &ensp;\_id               | `String`   | mongodb \_id(for delete)                            |
| &ensp;title              | `Object`   | 標題相關                                            |
| &ensp;&ensp;title        | `String`   | 標題                                                |
| &ensp;&ensp;company_name | `String`   | 公司名稱                                            |
| &ensp;&ensp;work_type    | `String`   | 職位(ex.前端工程師)                                 |
| &ensp;info               | `Object`   | 工作資訊                                            |
| &ensp;&ensp;salary       | `String`   | 薪資                                                |
| &ensp;&ensp;experience   | `String[]` | 經驗要求                                            |
| &ensp;&ensp;diploma      | `String`   | 學院要求                                            |
| &ensp;spec               | `Object`   | 詳細描述                                            |
| &ensp;&ensp;requirement  | `String[]` | 技能要求                                            |
| &ensp;&ensp;description  | `String[]` | 工作的其他描述                                      |
| &ensp;image              | `String`   | 公司頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## show my recruitment

[Back to top](#top)

顯示我的所有職缺

```
GET /recruitment
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| page    | `Number` | default 1   |
| perpage | `Number` | default 20  |

### Success response

#### Success response - `201`

| Name                     | Type       | Description                                         |
| ------------------------ | ---------- | --------------------------------------------------- |
| -                        | `Object[]` | 職缺們                                              |
| &ensp;\_id               | `String`   | mongodb \_id(for delete)                            |
| &ensp;title              | `Object`   | 標題相關                                            |
| &ensp;&ensp;title        | `String`   | 標題                                                |
| &ensp;&ensp;company_name | `String`   | 公司名稱                                            |
| &ensp;&ensp;work_type    | `String`   | 職位(ex.前端工程師)                                 |
| &ensp;info               | `Object`   | 工作資訊                                            |
| &ensp;&ensp;salary       | `String`   | 薪資                                                |
| &ensp;&ensp;experience   | `String[]` | 經驗要求                                            |
| &ensp;&ensp;diploma      | `String`   | 學院要求                                            |
| &ensp;spec               | `Object`   | 詳細描述                                            |
| &ensp;&ensp;requirement  | `String[]` | 技能要求                                            |
| &ensp;&ensp;description  | `String[]` | 工作的其他描述                                      |
| &ensp;image              | `String`   | 公司頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `403`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | not login   |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update recruitment

[Back to top](#top)

更新一筆職缺

```
PATCH /recruitment
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name         | Type       | Description                   |
| ------------ | ---------- | ----------------------------- |
| \_id         | `String`   | 要更新職缺的 mongodb \_id     |
| title        | `String`   | 職缺標題(optional)            |
| company_name | `String`   | 公司名稱(optional)            |
| work_type    | `String`   | 職位(ex.前端工程師)(optional) |
| salary       | `String`   | 薪資(optional)                |
| experience   | `String[]` | 經驗要求(optional)            |
| diploma      | `String`   | 學系要求(optional)            |
| requirement  | `String[]` | 技能要求(optional)            |
| description  | `String[]` | 其他描述(optional)            |
| file         | `File`     | 照片(optional)                |

### Success response

#### Success response - `203`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      | <li></li>   |

### Error response

#### Error response - `403`

| Name        | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| description | `String` | unauthorized(僅建立者可以更新) |

#### Error response - `404`

| Name        | Type     | Description     |
| ----------- | -------- | --------------- |
| description | `String` | \_id not exists |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/column

## add column

[Back to top](#top)

管理員新增文章

```
POST /column/add
```

### Parameters - `Parameter`

| Name                         | Type       | Description                                                                                                |
| ---------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| title                        | `String[]` | 文章標題 //要不要刪掉？而且應該沒有[] (xxxx 級 xxx (公司名稱與職位))(這邊看要不要和 name,experience 合併?) |
| id                           | `String`   | 文章的編號 //一個月超過兩次就要改編號 (建議 yymm)                                                          |
| top                          | `Object`   |                                                                                                            |
| &ensp;name                   | `String`   | 標題(xxxx 級 xxx)                                                                                          |
| &ensp;experience             | `String`   | 副標題(公司名稱與職位)                                                                                     |
| &ensp;hashtags               | `String[]` | 文章的 hashtag (文章類別，訪問者姓名、級別、工作、相關組織與企業)                                          |
| &ensp;body                   | `Object[]` |                                                                                                            |
| &ensp;&ensp;bigtitle         | `String[]` | (一、標題，二、求學階段...)                                                                                |
| &ensp;&ensp;bigsections      | `Object[]` |                                                                                                            |
| &ensp;&ensp;&ensp;subtitle   | `String`   | 子標題                                                                                                     |
| &ensp;&ensp;&ensp;subsection | `String`   | (文章內容)                                                                                                 |
| &ensp;annotation             | `Object[]` | 參與全人員                                                                                                 |
| &ensp;&ensp;job              | `String[]` | 工作 //這樣寫的話，就是一個工作對應很多人員                                                                |
| &ensp;&ensp;contributer      | `String[]` | 人員 //就直接打那個工作的所有人員名字，如“王曉明、陳小明、林小華“                                          |
| anno                         | `String[]` | [所有採訪人員姓名]                                                                                         |
| date                         | `String`   | yyyy/mm/dd 星期 x //我先把[]拿掉                                                                           |
| exp                          | `String[]` | 職位                                                                                                       |
| edu                          | `String[]` | 學歷 [學士:校系(畢業年分),碩士:校系(畢業年分),博士:校系(畢業年分)]                                         |
| intro                        | `String[]` | 簡介 (1 個 element 是一段)                                                                                 |
| file                         | `File`     | 封面照                                                                                                     |

### Parameters examples

`js` - Input-Example:

```js
let input = new FormData()

input.append('file', 採訪合照)
input.append('id', 'yymm')
input.append('title', '2008級 方劭云（當屆最年輕升遷副教授）')
input.append('top[name]', '2008級 方劭云')
input.append('top[experience]', '當屆最年輕升遷副教授')
input.append('top[hashtags][0]', 關鍵字1)
input.append('annotation[annotation][0][job]', '撰寫')
input.append('annotation[annotation][0][contributer]', '王曉明')
input.append('anno[]', '作者1')
input.append('date', 'yyyy/mm/dd 星期x')
input.append('exp[0]', '現任：國立臺灣科技大學電機系 副教授')
input.append('edu[0]', '博士：台灣大學電子所  (2013)')
input.append('intro[0]', '2008畢業於台大電機，目前任職於臺灣科技大學的方劭云教授...')

input.append('body[body][][bigtitle]', '一、我的大學生涯')
input.append('body[body][][bigsections][0][subtitle]', '球隊與課業交織的辛苦大學生活')
input.append(
  'body[body][][bigsections][0][subsection]',
  '因為我是排球校隊，沒能花很多時間在系上...',
)

axios.post('/api/addColumn', input, { headers: { 'content-type': 'multipart/form-data' } })
```

### Success response

#### Success response - `201`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| id   | `String` | post 的 id  |

### Error response

#### Error response - `400`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | id is required |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete column

[Back to top](#top)

管理員刪除文章

```
DELETE /column/delete
```

### Parameters - `Parameter`

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| id   | `String` | 文章的編號 (建議 yymm) |

### Success response

#### Success response - `201`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| id   | `String` | post 的 id  |

### Error response

#### Error response - `400`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | id is required |

## get column detail

[Back to top](#top)

拿詳細文章內容

```
GET /column/detail
```

### Parameters - `Parameter`

| Name | Type     | Description    |
| ---- | -------- | -------------- |
| id   | `String` | yymm(required) |

### Success response example

#### Success response example - `Success-Response:`

```json
{
  "top": {
    "name": "String",
    "experience": "String",
    "hashtags": ["String"]
  },
  "body": {
    "body": [
      {
        "bigtitle": "String",
        "bigsections": [
          {
            "subtitle": "String",
            "subsection": "String"
          }
        ]
      }
    ]
  },
  "annotation": {
    "annotation": [
      {
        "job": "String",
        "contributer": "String"
      }
    ]
  },
  "id": "String"
}
```

### Error response

#### Error response - `404`

| Name        | Type     | Description               |
| ----------- | -------- | ------------------------- |
| description | `String` | id is required/資料不存在 |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get column outline with id optional

[Back to top](#top)

拿 Outline 資料(含圖片)

```
GET /column/outline
```

### Parameters - `Parameter`

| Name    | Type     | Description                  |
| ------- | -------- | ---------------------------- |
| id      | `String` | id(optional,若未給則送全部)  |
| perpage | `String` | 一頁數量(optional,default 5) |
| page    | `String` | 頁數(optional,default 1)     |

### Success response example

#### Success response example - `Success-Response:`

```json
{
  "data": [
    {
      "anno": ["String"],
      "date": "String",
      "title": ["String"],
      "exp": ["String"],
      "edu": ["String"],
      "intro": ["String"],
      "id": "String",
      "imgSrc": "String"
    }
  ],
  "maxPage": "Number"
}
```

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search column by keywords or hashtags

[Back to top](#top)

用 keyword(空格區分)或 hashtag 搜尋

```
GET /column/search
```

### Parameters - `Parameter`

| Name     | Type     | Description                  |
| -------- | -------- | ---------------------------- |
| keyword  | `String` | 用空格區分                   |
| hashtags | `String` | 用 hashtags 搜尋             |
| perpage  | `String` | 一頁數量(optional,default 5) |
| page     | `String` | 頁數(optional,default 1)     |

### Success response example

#### Success response example - `Success-Response:`

```json
{
  "data": [
    {
      "anno": ["String"],
      "date": "String",
      "title": ["String"],
      "exp": ["String"],
      "edu": ["String"],
      "intro": ["String"],
      "id": "String",
      "imgSrc": "String"
    }
  ],
  "maxPage": "Number"
}
```

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update column

[Back to top](#top)

管理員更新文章

```
PATCH /column/update
```

### Parameters - `Parameter`

| Name                         | Type       | Description                                                                   |
| ---------------------------- | ---------- | ----------------------------------------------------------------------------- |
| title                        | `String[]` | 文章標題 (xxxx 級 xxx (公司名稱與職位))(這邊看要不要和 name,experience 合併?) |
| id                           | `String`   | 文章的編號 (建議 yymm)                                                        |
| top                          | `Object`   |                                                                               |
| &ensp;name                   | `String`   | 標題(xxxx 級 xxx)                                                             |
| &ensp;experience             | `String`   | 副標題(公司名稱與職位)                                                        |
| &ensp;hashtags               | `String[]` | 文章的 hashtag (文章類別，訪問者姓名、級別、工作、相關組織與企業)             |
| &ensp;body                   | `Object[]` |                                                                               |
| &ensp;&ensp;bigtitle         | `String`   | (一、標題，二、求學階段...)                                                   |
| &ensp;&ensp;bigsections      | `Object[]` |                                                                               |
| &ensp;&ensp;&ensp;subtitle   | `String`   | 子標題                                                                        |
| &ensp;&ensp;&ensp;subsection | `String`   | (文章內容)                                                                    |
| &ensp;annotation             | `String[]` | 參與全人員                                                                    |
| &ensp;&ensp;job              | `String[]` | 工作                                                                          |
| &ensp;&ensp;contributer      | `String[]` | 人員                                                                          |
| anno                         | `String[]` | [所有採訪人員姓名]                                                            |
| date                         | `String[]` | yyyy/mm/dd 星期 x                                                             |
| exp                          | `String[]` | 職位                                                                          |
| edu                          | `String[]` | 學歷 [學士:校系(畢業年分),碩士:校系(畢業年分),博士:校系(畢業年分)]            |
| intro                        | `String[]` | 簡介 (1 個 element 是一段)                                                    |
| file                         | `File`     | 頭貼                                                                          |

### Parameters examples

`js` - Input-Example:

```js
let input = new FormData()

input.append('file', 採訪合照)
input.append('id', 'yymm')
input.append('title', '2008級 方劭云（當屆最年輕升遷副教授）')
input.append('top[name]', '2008級 方劭云')
input.append('top[experience]', '當屆最年輕升遷副教授')
input.append('top[hashtags][0]', 關鍵字1)
input.append('annotation[annotation][0][job]', '撰寫')
input.append('annotation[annotation][0][contributer]][]', '王曉明')
input.append('anno[]', '作者1')
input.append('date', 'yyyy/mm/dd 星期x')
input.append('exp[0]', '現任：國立臺灣科技大學電機系 副教授')
input.append('edu[0]', '博士：台灣大學電子所  (2013)')
input.append('intro[0]', '2008畢業於台大電機，目前任職於臺灣科技大學的方劭云教授...')

input.append('body[body][][bigtitle]', '一、我的大學生涯')
input.append('body[body][][bigsections][0][subtitle]', '球隊與課業交織的辛苦大學生活')
input.append(
  'body[body][][bigsections][0][subsection]',
  '因為我是排球校隊，沒能花很多時間在系上...',
)

axios.post('/api/updateColumn', input, { headers: { 'content-type': 'multipart/form-data' } })
```

### Success response

#### Success response - `201`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| id   | `String` | post 的 id  |

### Error response

#### Error response - `400`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | id is required |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/profile_new

## search profile by fields

[Back to top](#top)

給定欄位搜尋 porfile(OR)

```
POST /searchProfile
```

### Parameters - `Parameter`

| Name         | Type     | Description                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------ |
| account      | `String` | 學號(用'x'進行模糊搜尋, ex.'b079010xx')                                        |
| username     | `String` | 名字                                                                           |
| nickname     | `String` | 綽號                                                                           |
| profile      | `String` | 自介                                                                           |
| publicEmail  | `String` | 公開信相                                                                       |
| cellphone    | `String` | 手機                                                                           |
| CC           | `String` | city and country                                                               |
| web          | `String` | 個人部落格                                                                     |
| facebook     | `String` | facebook                                                                       |
| Linkedin     | `String` | Linkedin                                                                       |
| github       | `String` | github                                                                         |
| major        | `Object` | 主修                                                                           |
| double_major | `String` | 雙主修                                                                         |
| minor        | `String` | 輔修                                                                           |
| master       | `String` | 碩士                                                                           |
| doctor       | `String` | 博士                                                                           |
| Occupation   | `Object` | 工作(這裡是 obj 不是 array 喔，會用 and 搜尋)(COP3 個中也可以只填 1 個或 2 個) |
| &ensp;C      | `String` | 公司                                                                           |
| &ensp;O      | `String` | 部門                                                                           |
| &ensp;P      | `String` | 職位                                                                           |
| page         | `Number` | default 1                                                                      |
| perpage      | `Number` | default 50                                                                     |

### Success response

#### Success response - `201`

| Name         | Type       | Description                                           |
| ------------ | ---------- | ----------------------------------------------------- |
| userimage    | `String`   | 大頭貼(使用<code>&lt;img src={userimage}/&gt;</code>) |
| account      | `String`   | 學號                                                  |
| username     | `String`   | 名字                                                  |
| nickname     | `String`   | 綽號                                                  |
| profile      | `String`   | 自介                                                  |
| publicEmail  | `String`   | 公開信相                                              |
| cellphone    | `String`   | 手機                                                  |
| CC           | `String`   | city and country                                      |
| web          | `String`   | 個人部落格                                            |
| facebook     | `String`   | facebook                                              |
| Linkedin     | `String`   | Linkedin                                              |
| github       | `String`   | github                                                |
| major        | `String`   | 學士                                                  |
| double_major | `String`   | 雙主修                                                |
| minor        | `String`   | 輔系                                                  |
| master       | `String`   | 碩士                                                  |
| doctor       | `String`   | 博士                                                  |
| Occupation   | `Object[]` | 職業                                                  |
| &ensp;C      | `String`   | 公司                                                  |
| &ensp;O      | `String`   | 部門                                                  |
| &ensp;P      | `String`   | 職稱                                                  |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search profile by keywords

[Back to top](#top)

給定關鍵字(用空格區分)搜尋

```
POST /smartsearchProfile
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| keyword | `String` | 用空格區分  |
| page    | `String` |             |
| perpage | `String` | default 50  |

### Success response

#### Success response - `201`

| Name         | Type       | Description                                           |
| ------------ | ---------- | ----------------------------------------------------- |
| userimage    | `String`   | 大頭貼(使用<code>&lt;img src={userimage}/&gt;</code>) |
| account      | `String`   | 學號                                                  |
| username     | `String`   | 名字                                                  |
| nickname     | `String`   | 綽號                                                  |
| profile      | `String`   | 自介                                                  |
| publicEmail  | `String`   | 公開信相                                              |
| cellphone    | `String`   | 手機                                                  |
| CC           | `String`   | city and country                                      |
| web          | `String`   | 個人部落格                                            |
| facebook     | `String`   | facebook                                              |
| Linkedin     | `String`   | Linkedin                                              |
| github       | `String`   | github                                                |
| major        | `String`   | 學士                                                  |
| double_major | `String`   | 雙主修                                                |
| minor        | `String`   | 輔系                                                  |
| master       | `String`   | 碩士                                                  |
| doctor       | `String`   | 博士                                                  |
| Occupation   | `Object[]` | 職業                                                  |
| &ensp;C      | `String`   | 公司                                                  |
| &ensp;O      | `String`   | 部門                                                  |
| &ensp;P      | `String`   | 職稱                                                  |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## show my profile

[Back to top](#top)

顯示個人 profile

```
GET /profile
```

### Success response

#### Success response - `201`

| Name         | Type       | Description                                           |
| ------------ | ---------- | ----------------------------------------------------- |
| userimage    | `String`   | 大頭貼(使用<code>&lt;img src={userimage}/&gt;</code>) |
| account      | `String`   | 學號                                                  |
| username     | `String`   | 名字                                                  |
| nickname     | `String`   | 綽號                                                  |
| profile      | `String`   | 自介                                                  |
| publicEmail  | `String`   | 公開信相                                              |
| cellphone    | `String`   | 手機                                                  |
| CC           | `String`   | city and country                                      |
| web          | `String`   | 個人部落格                                            |
| facebook     | `String`   | facebook                                              |
| Linkedin     | `String`   | Linkedin                                              |
| major        | `String`   | 學士                                                  |
| double_major | `String`   | 雙主修                                                |
| minor        | `String`   | 輔系                                                  |
| master       | `String`   | 碩士                                                  |
| doctor       | `String`   | 博士                                                  |
| Occupation   | `Object[]` | 職業                                                  |
| &ensp;C      | `String`   | 公司                                                  |
| &ensp;O      | `String`   | 部門                                                  |
| &ensp;P      | `String`   | 職稱                                                  |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update profile

[Back to top](#top)

更新 porfile

```
PATCH /profile
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name         | Type       | Description                                     |
| ------------ | ---------- | ----------------------------------------------- |
| userimage    | `File`     | 大頭貼                                          |
| username     | `String`   | 名字//account 禁止修改                          |
| nickname     | `String`   | 綽號                                            |
| profile      | `String`   | 自介                                            |
| publicEmail  | `String`   | 公開信相                                        |
| cellphone    | `String`   | 手機                                            |
| CC           | `String`   | city and country                                |
| web          | `String`   | 個人部落格                                      |
| facebook     | `String`   | facebook                                        |
| Linkedin     | `String`   | Linkedin                                        |
| major        | `String`   | 主修                                            |
| double_major | `String`   | 雙主修                                          |
| minor        | `String`   | 輔修                                            |
| master       | `String`   | 碩士                                            |
| doctor       | `String`   | 博士                                            |
| Occupation   | `Object[]` | 工作(因為 array 運算複雜，請直接給我完整的覆蓋) |
| &ensp;C      | `String`   | 公司，append('Occupation[${index}][C]',vlaue)   |
| &ensp;O      | `String`   | 部門，append('Occupation[${index}][O]',vlaue)   |
| &ensp;P      | `String`   | 職位，append('Occupation[${index}][P]',vlaue)   |

### Success response

#### Success response - `204`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `404`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號不存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/recent

## get recent announcement

[Back to top](#top)

拿 Announcement 資料

```
GET /announcement/recent
```

### Parameters - `Parameter`

| Name   | Type     | Description            |
| ------ | -------- | ---------------------- |
| amount | `Number` | _Default value: 5_<br> |

### Success response

#### Success response - `201`

| Name          | Type       | Description            |
| ------------- | ---------- | ---------------------- |
| announcements | `Object[]` | array of announcements |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get recent column

[Back to top](#top)

拿 Outline 資料(含圖片)

```
GET /column/recent
```

### Parameters - `Parameter`

| Name   | Type     | Description                |
| ------ | -------- | -------------------------- |
| number | `Number` | 篇數*Default value: 5*<br> |

### Success response example

#### Success response example - `Success-Response:`

```json
{
  "data": [
    {
      "anno": ["String"],
      "date": "String",
      "title": ["String"],
      "exp": ["String"],
      "edu": ["String"],
      "intro": ["String"],
      "id": "String",
      "columnImg": {
        "data": "Buffer",
        "contentType": "String"
      }
    }
  ]
}
```

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get recent recommendation

[Back to top](#top)

搜尋簡歷

```
GET /recommendation/recent
```

### Parameters - `Parameter`

| Name   | Type     | Description                |
| ------ | -------- | -------------------------- |
| number | `Number` | 篇數*Default value: 5*<br> |

### Success response

#### Success response - `201`

| Name                         | Type       | Description                                     |
| ---------------------------- | ---------- | ----------------------------------------------- |
| -                            | `Object[]` | 簡歷們                                          |
| &ensp;\_id                   | `String`   | mongodb \_id(for update,delete)                 |
| &ensp;title                  | `Object`   | 標題相關                                        |
| &ensp;&ensp;title            | `String`   | 標題                                            |
| &ensp;&ensp;name             | `String`   | 名字                                            |
| &ensp;&ensp;desire_work_type | `String`   | 想要職位                                        |
| &ensp;info                   | `Object`   | 工作資訊                                        |
| &ensp;&ensp;contact          | `String`   | 電話                                            |
| &ensp;&ensp;email            | `String[]` | 信箱                                            |
| &ensp;&ensp;diploma          | `String`   | 學院                                            |
| &ensp;spec                   | `Object`   | 詳細描述                                        |
| &ensp;&ensp;experience       | `String[]` | 經驗                                            |
| &ensp;&ensp;speciality       | `String[]` | 專長                                            |
| &ensp;image                  | `String`   | 頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `403`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| -    | `String` | not login   |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/recommendation

## add recommendation

[Back to top](#top)

新增簡歷

```
POST /recommendation
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name             | Type       | Description |
| ---------------- | ---------- | ----------- |
| title            | `String`   | 簡歷標題    |
| name             | `String`   | 姓名        |
| desire_work_type | `String`   | 想要職位    |
| contact          | `String`   | 電話        |
| email            | `String`   | 信箱        |
| diploma          | `String`   | 學位        |
| experience       | `String[]` | 經驗        |
| speciality       | `String[]` | 專長        |
| file             | `File`     | 照片        |

### Success response

#### Success response - `201`

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| title |      | 簡歷標題       |
| \_id  |      | mongoDB 的\_id |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## delete recommendation

[Back to top](#top)

刪除簡歷

```
DELETE /recommendation
```

### Parameters - `Parameter`

| Name | Type     | Description             |
| ---- | -------- | ----------------------- |
| \_id | `String` | get 或 add 時回傳的\_id |

### Success response

#### Success response - `200`

| Name  | Type | Description |
| ----- | ---- | ----------- |
| title |      | title       |

### Error response

#### Error response - `403`

| Name        | Type     | Description    |
| ----------- | -------- | -------------- |
| description | `String` | not authorized |

#### Error response - `404`

| Name        | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| description | `String` | \_id not found or not authorized |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search recommendation by field

[Back to top](#top)

搜尋簡歷

```
GET /recommendation
```

### Parameters - `Parameter`

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| \_id             | `String` | \_id        |
| account          | `String` | 學號        |
| title            | `String` | 簡歷標題    |
| name             | `String` | 姓名        |
| desire_work_type | `String` | 想要職位    |
| contact          | `String` | 電話        |
| email            | `String` | 信箱        |
| diploma          | `String` | 學位        |
| experience       | `String` | 經驗        |
| speciality       | `String` | 專長        |
| page             | `Number` | default 1   |
| perpage          | `Number` | default 50  |

### Success response

#### Success response - `201`

| Name                         | Type       | Description                                     |
| ---------------------------- | ---------- | ----------------------------------------------- |
| -                            | `Object[]` | 簡歷們                                          |
| &ensp;\_id                   | `String`   | mongodb \_id(for update,delete)                 |
| &ensp;title                  | `Object`   | 標題相關                                        |
| &ensp;&ensp;title            | `String`   | 標題                                            |
| &ensp;&ensp;name             | `String`   | 名字                                            |
| &ensp;&ensp;desire_work_type | `String`   | 想要職位                                        |
| &ensp;info                   | `Object`   | 工作資訊                                        |
| &ensp;&ensp;contact          | `String`   | 電話                                            |
| &ensp;&ensp;email            | `String[]` | 信箱                                            |
| &ensp;&ensp;diploma          | `String`   | 學院                                            |
| &ensp;spec                   | `Object`   | 詳細描述                                        |
| &ensp;&ensp;experience       | `String[]` | 經驗                                            |
| &ensp;&ensp;speciality       | `String[]` | 專長                                            |
| &ensp;image                  | `String`   | 頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `403`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| -    | `String` | not login   |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## search recommendation by keywords

[Back to top](#top)

關鍵字搜尋(空格區分)

```
POST /smartsearchrecommendation
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| keyword | `String` | 用空格區分  |
| page    | `Number` | default 1   |
| perpage | `Number` | default 50  |

### Success response

#### Success response - `201`

| Name                         | Type       | Description                                     |
| ---------------------------- | ---------- | ----------------------------------------------- |
| -                            | `Object[]` | 簡歷們                                          |
| &ensp;\_id                   | `String`   | mongodb \_id(for update,delete)                 |
| &ensp;title                  | `Object`   | 標題相關                                        |
| &ensp;&ensp;title            | `String`   | 標題                                            |
| &ensp;&ensp;name             | `String`   | 名字                                            |
| &ensp;&ensp;desire_work_type | `String`   | 想要職位                                        |
| &ensp;info                   | `Object`   | 工作資訊                                        |
| &ensp;&ensp;contact          | `String`   | 電話                                            |
| &ensp;&ensp;email            | `String[]` | 信箱                                            |
| &ensp;&ensp;diploma          | `String`   | 學院                                            |
| &ensp;spec                   | `Object`   | 詳細描述                                        |
| &ensp;&ensp;experience       | `String[]` | 經驗                                            |
| &ensp;&ensp;speciality       | `String[]` | 專長                                            |
| &ensp;image                  | `String`   | 頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `403`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| -    | `String` | not login   |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## show my recommendation

[Back to top](#top)

顯示我建立的簡歷

```
GET /recommendation/mine
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| page    | `Number` | default 1   |
| perpage | `Number` | default 20  |

### Success response

#### Success response - `201`

| Name                         | Type       | Description                                     |
| ---------------------------- | ---------- | ----------------------------------------------- |
| -                            | `Object[]` | 簡歷們                                          |
| &ensp;\_id                   | `String`   | mongodb \_id(for update,delete)                 |
| &ensp;title                  | `Object`   | 標題相關                                        |
| &ensp;&ensp;title            | `String`   | 標題                                            |
| &ensp;&ensp;name             | `String`   | 名字                                            |
| &ensp;&ensp;desire_work_type | `String`   | 想要職位                                        |
| &ensp;info                   | `Object`   | 工作資訊                                        |
| &ensp;&ensp;contact          | `String`   | 電話                                            |
| &ensp;&ensp;email            | `String`   | 信箱                                            |
| &ensp;&ensp;diploma          | `String`   | 學院                                            |
| &ensp;spec                   | `Object`   | 詳細描述                                        |
| &ensp;&ensp;experience       | `String[]` | 經驗                                            |
| &ensp;&ensp;speciality       | `String[]` | 專長                                            |
| &ensp;image                  | `String`   | 頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `403`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| -    | `String` | not login   |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## update recommendation

[Back to top](#top)

更新簡歷

```
PATCH /recommendation
```

### Header examples

header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name             | Type       | Description             |
| ---------------- | ---------- | ----------------------- |
| \_id             | `String`   | get 或 add 時回傳的\_id |
| title            | `String`   | 簡歷標題                |
| name             | `String`   | 姓名                    |
| desire_work_type | `String`   | 想要職位                |
| contact          | `String`   | 電話                    |
| email            | `String`   | 信箱                    |
| diploma          | `String`   | 學位                    |
| experience       | `String[]` | 經驗                    |
| speciality       | `String[]` | 專長                    |
| file             | `File`     | 照片                    |

### Success response

#### Success response - `203`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      | <li></li>   |

### Error response

#### Error response - `403`

| Name        | Type     | Description                         |
| ----------- | -------- | ----------------------------------- |
| description | `String` | not valid \_id or account not match |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# In/study

## add form link

[Back to top](#top)

設定本年表單 (新增本年表單連結)

```
POST /study/addLink
```

### Parameters - `Parameter`

| Name   | Type     | Description          |
| ------ | -------- | -------------------- |
| senior | `String` | 學長姊表單連結       |
| junior | `String` | 學弟妹表單連結       |
| note   | `String` | 備註(截止時間之類的) |

### Success response

#### Success response - `201`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| x    | `String` | data stored |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get form link

[Back to top](#top)

拿取本年表單連結

```
GET /study/links
```

### Success response

#### Success response - `201`

| Name   | Type     | Description    |
| ------ | -------- | -------------- |
| senior | `String` | 學長姊表單連結 |
| junior | `String` | 學弟妹表單連結 |
| note   | `String` | 備註           |

### Error response

#### Error response - `403`

| Name        | Type     | Description         |
| ----------- | -------- | ------------------- |
| description | `String` | server not open yet |

#### Error response - `404`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | not found   |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## pairing

[Back to top](#top)

給學長姊跟學弟妹留學配對的.xlsx 檔，幫他們配對

```
POST /study_matching
```

### Header examples

config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name   | Type   | Description          |
| ------ | ------ | -------------------- |
| senior | `File` | 學長姐的 senior.xlsx |
| junior | `File` | 學弟妹的 junior.xlsx |

### Success response

#### Success response - `200`

| Name | Type   | Description |
| ---- | ------ | ----------- |
| -    | `File` | output.xlsx |

## sent pairing notification

[Back to top](#top)

給/study/matching 拿到的 output.xlsx 檔，並寄信

```
POST /study/sendmail
```

### Header examples

config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| result | `File` | /study/match 產生的.xlsx |

### Success response

#### Success response - `203`

| Name   | Type       | Description          |
| ------ | ---------- | -------------------- |
| errors | `String[]` | 發生錯誤的寄件者姓名 |

# Out/account

## accountActivate

[Back to top](#top)

註冊後用信箱寄這個連結，驗證。完成後自動導向

```
GET /regact/:account/:active
```

### Header examples

config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| account | `String` | 學號        |
| active  | `String` | 驗證碼      |

### Success response

#### Success response - `201`

| Name | Type   | Description |
| ---- | ------ | ----------- |
| -    | `HTML` | <li></li>   |

### Error response

#### Error response - `400`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 請添加照片  |

#### Error response - `403`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號已存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## isLogin

[Back to top](#top)

檢查是否有登入

```
POST /isLogin
```

### Success response

#### Success response - `201`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| account | `String` | 登入者學號  |

### Error response

#### Error response - `403`

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| description | `String` | &quot;未登入&quot; |

## login

[Back to top](#top)

登入

```
POST /login
```

### Parameters - `Parameter`

| Name     | Type     | Description              |
| -------- | -------- | ------------------------ |
| account  | `String` | 學號                     |
| password | `String` | 密碼(以後建議在前端加密) |

### Success response

#### Success response - `201`

| Name     | Type      | Description  |
| -------- | --------- | ------------ |
| username | `String`  | 登入者名字   |
| account  | `String`  | 登入者學號   |
| isAuth   | `Boolean` | 是否是管理員 |

### Error response

#### Error response - `401`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 密碼錯誤    |

#### Error response - `404`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號不存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## loginFB

[Back to top](#top)

登入 by facebook

```
POST /loginFB
```

### Parameters - `Parameter`

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| facebookID | `String` | facebook ID |

### Success response

#### Success response - `201`

| Name     | Type      | Description  |
| -------- | --------- | ------------ |
| username | `String`  | 登入者名字   |
| account  | `String`  | 學號         |
| isAuth   | `Boolean` | 是否是管理員 |

### Error response

#### Error response - `404`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號不存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## logout

[Back to top](#top)

登出

```
POST /logout
```

### Success response

#### Success response - `204`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `500`

| Name        | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| description | `String` | &quot;session destroy 失敗&quot; |

## register

[Back to top](#top)

註冊(by 學號 &amp; email)，.env 設定 newReg=true 使用新註冊規則

```
POST /register
```

### Header examples

config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name            | Type     | Description                                                      |
| --------------- | -------- | ---------------------------------------------------------------- |
| account         | `String` | 學號                                                             |
| password        | `String` | 密碼(以後建議在前端加密)                                         |
| ConfirmPassword | `String` | 二次密碼                                                         |
| username        | `String` | 使用者名字                                                       |
| Email           | `String` | 信箱                                                             |
| isGraduated     | `String` | false 則寄送 email 給account@ntu.edu.tw(newRule=version3 才需要) |

### Success response

#### Success response - `201`

| Name        | Type     | Description                                                       |
| ----------- | -------- | ----------------------------------------------------------------- |
| username    | `String` | 姓名(newRule=false)                                               |
| isGraduated | `String` | isGraduated(newRule=version3)                                     |
| email       | `String` | account@ntu.edu.tw(newRule=version3 &amp;&amp; isGraduated=false) |

### Error response

#### Error response - `400`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 請添加照片  |

#### Error response - `403`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號已存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## registerFB

[Back to top](#top)

註冊(by facebook ID)，在.env 用 newReg=version3

```
POST /registerFB
```

### Header examples

config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name        | Type     | Description                                                      |
| ----------- | -------- | ---------------------------------------------------------------- |
| facebookID  | `String` | facebookID                                                       |
| account     | `String` | 學號                                                             |
| username    | `String` | 使用者名字                                                       |
| file        | `File`   | 身分證明的照片(optional)                                         |
| avatar      | `File`   | 大頭貼(optional)                                                 |
| Email       | `String` | Email(newRule=true,version3 才需要)                              |
| isGraduated | `String` | false 則寄送 email 給account@ntu.edu.tw(newRule=version3 才需要) |

### Success response

#### Success response - `201`

| Name        | Type     | Description                                                       |
| ----------- | -------- | ----------------------------------------------------------------- |
| username    | `String` | 使用者名字(newRule=false)                                         |
| isGraduated | `String` | isGraduated(newRule=version3)                                     |
| email       | `String` | account@ntu.edu.tw(newRule=version3 &amp;&amp; isGraduated=false) |

### Error response

#### Error response - `400`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 請添加照片  |

#### Error response - `403`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 帳號已存在  |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## registerStep2

[Back to top](#top)

註冊，新增照片(供管理員檢視)

```
POST /register_step2
```

### Header examples

config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| account | `String` | 學號        |
| file    | `File`   | 身分證明    |

### Success response

#### Success response - `201`

| Name | Type     | Description |
| ---- | -------- | ----------- |
| -    | `String` | <li></li>   |

### Error response

#### Error response - `400`

| Name        | Type     | Description   |
| ----------- | -------- | ------------- |
| description | `String` | img not given |

#### Error response - `404`

| Name        | Type     | Description       |
| ----------- | -------- | ----------------- |
| description | `String` | account not found |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# Out/contact

## get in touch

[Back to top](#top)

用 google 表單蒐集站內信，統整在<a href="https://docs.google.com/spreadsheets/d/13ryrmVkQtOvHjr5I-h1atrqpBgkDOeixp1mFKwAK3U0/edit?resourcekey#gid=1383126660">google sheet</a>

```
GET https://docs.google.com/forms/d/e/1FAIpQLSed-GXXBhqIRUBEX7-nMlwuQ3a22-Z51mtxVSlcyhWzG9TH2Q/formResponse
```

### Parameters examples

`js` - Input-Example:

```js
axios.get(url, {
  usp: 'pp_url',
  'entry.1670134810': 'your name',
  'entry.302205267': 'your email',
  'entry.307115258': 'your message',
})
```

# Out/forget

## activation

[Back to top](#top)

檢查激活碼，忘記密碼重設

```
POST /activation
```

### Parameters - `Parameter`

| Name     | Type     | Description              |
| -------- | -------- | ------------------------ |
| account  | `String` | 學號                     |
| active   | `String` | 激活碼(附在信箱的連結裡) |
| password | `String` | 要重設的密碼             |

### Success response

#### Success response - `200`

| Name | Type | Description |
| ---- | ---- | ----------- |
| -    |      |             |

### Error response

#### Error response - `401`

| Name        | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| description | `String` | 驗證碼已不存在，請至 forget 頁面 |

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## forget

[Back to top](#top)

忘記密碼，寄信

```
POST /forget
```

### Parameters - `Parameter`

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| account | `String` | 學號        |

### Success response

#### Success response - `200`

| Name  | Type     | Description                                                   |
| ----- | -------- | ------------------------------------------------------------- |
| email | `String` | <li>使用者填寫的 email</li> <li>&quot;您的私人信箱&quot;</li> |

### Error response

#### Error response - `404`

| Name        | Type     | Description                                           |
| ----------- | -------- | ----------------------------------------------------- |
| description | `String` | <li>帳號不存在</li> <li>未設定信箱，請聯絡管理員</li> |

#### Error response - `500`

| Name        | Type     | Description                                                     |
| ----------- | -------- | --------------------------------------------------------------- |
| description | `String` | <li>資料庫錯誤</li> <li>信件範本讀取失敗</li> <li>寄信失敗</li> |

# Out/publicData

## get head&#39;s image

[Back to top](#top)

獲取部長(歷史清單中的)圖片

```
GET /history/img
```

### Parameters - `Parameter`

| Name | Type     | Description      |
| ---- | -------- | ---------------- |
| \_id | `String` | ? mongodb 的\_id |

### Success response

#### Success response - `200`

| Name | Type   | Description   |
| ---- | ------ | ------------- |
| -    | `File` | 照片(dataURL) |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get list of heads

[Back to top](#top)

獲取部長歷史清單

```
GET /history
```

### Success response

#### Success response - `200`

| Name             | Type       | Description                                         |
| ---------------- | ---------- | --------------------------------------------------- |
| -                | `Object[]` | 歷史資料們                                          |
| &ensp;\_id       | `String`   | mongodb \_id(for update, delete)                    |
| &ensp;grade      | `String`   | 年級                                                |
| &ensp;title      | `String`   | 標題                                                |
| &ensp;people     | `Object[]` | 人                                                  |
| &ensp;&ensp;name | `String`   | 名字                                                |
| &ensp;&ensp;img  | `String`   | 照片的 mongodb \_id(作為 GET /history/img 的 param) |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

## get list of persons in charge

[Back to top](#top)

獲取負責人清單

```
GET /teamData
```

### Parameters - `Parameter`

| Name | Type | Description |
| ---- | ---- | ----------- |
| x    | `x`  | x           |

### Success response

#### Success response - `200`

| Name       | Type       | Description                      |
| ---------- | ---------- | -------------------------------- |
| -          | `Object[]` | 負責人資料們                     |
| &ensp;\_id | `String`   | mongodb \_id(for update, delete) |
| &ensp;name | `String`   | 姓名                             |
| &ensp;job  | `String`   | 職稱                             |
| &ensp;img  | `Object[]` | 檔案(頭像)                       |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |

# Out/recent

## get recent recruitment

[Back to top](#top)

顯示所有職缺(等價於不傳任何參數的 searchRecruitment)

```
GET /recruitment/recent
```

### Parameters - `Parameter`

| Name   | Type     | Description                |
| ------ | -------- | -------------------------- |
| number | `Number` | 篇數*Default value: 5*<br> |

### Success response

#### Success response - `201`

| Name                     | Type       | Description                                         |
| ------------------------ | ---------- | --------------------------------------------------- |
| -                        | `Object[]` | 職缺們                                              |
| &ensp;\_id               | `String`   | mongodb \_id(for delete)                            |
| &ensp;title              | `Object`   | 標題相關                                            |
| &ensp;&ensp;title        | `String`   | 標題                                                |
| &ensp;&ensp;company_name | `String`   | 公司名稱                                            |
| &ensp;&ensp;work_type    | `String`   | 職位(ex.前端工程師)                                 |
| &ensp;info               | `Object`   | 工作資訊                                            |
| &ensp;&ensp;salary       | `String`   | 薪資                                                |
| &ensp;&ensp;experience   | `String[]` | 經驗要求                                            |
| &ensp;&ensp;diploma      | `String`   | 學院要求                                            |
| &ensp;spec               | `Object`   | 詳細描述                                            |
| &ensp;&ensp;requirement  | `String[]` | 技能要求                                            |
| &ensp;&ensp;description  | `String[]` | 工作的其他描述                                      |
| &ensp;image              | `String`   | 公司頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `500`

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| description | `String` | 資料庫錯誤  |
