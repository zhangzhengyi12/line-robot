import createMessage from 'common/js/message.js'
const request = require('superagent')

const commonErrorMessage = createTooMessage({ text: '哎呀！获取失败啦' })

const TURING_CODE = {
  TEXT: 100000,
  LINK: 200000,
  NEWS: 302000,
  MENU: 308000
}

// 对创建message进行包装
// 创建一个最终错误的message来确保能够获取到

function createTooMessage(obj = {}) {
  return createMessage(Object.assign({}, obj, { type: 'Too' }))
}

export function getQinyunke(query) {
  const URL = 'http://api.laoliuscript.tk/api/qinyunke'
  const KEY = 'free'
  const APPID = 0
  return new Promise((resolve, reject) => {
    request
      .get(URL)
      .query({ key: KEY, appid: APPID, msg: query })
      .then(res => {
        if (res.body.result === 0) {
          const message = createTooMessage({ text: res.body.content })
          resolve(message)
        } else {
          resolve(commonErrorMessage)
        }
      })
  })
}

export function getTuring(query, userId) {
  // 菜谱和新闻用普通文本做。
  const URL = 'http://www.tuling123.com/openapi/api'
  const KEY = '919c296a12994612a4ddac7b47dba958'

  return new Promise((resolve, reject) => {
    request
      .post(URL)
      .query({ key: KEY, info: query, userid: userId })
      .then(res => {
        const code = res.body.code
        const text = res.body.text
        let message = commonErrorMessage
        if (code === TURING_CODE.TEXT) {
          message = createTooMessage({ text })
        }
        if (code === TURING_CODE.LINK) {
          const linkList = [{ link: res.body.url }]
          message = createTooMessage({ text, linkList })
        }
        if (code === TURING_CODE.NEWS) {
          const linkList = res.body.list.map(item => {
            return { title: item.article, link: item.detailurl }
          })
          message = createTooMessage({ text, linkList })
        }
        if (code === TURING_CODE.MENU) {
          const linkList = res.body.list.map(item => {
            return { title: item.name, link: item.detailurl, icon: item.icon }
          })
          message = createTooMessage({ text, linkList })
        }
        resolve(message)
      })
  })
}

export function getITPK(query) {
  const api_key = 'cf4430bfe3353c43f93534d55b26160b'
  const api_sercret = 'm46itsgtu2sg'
  const url = 'http://api.laoliuscript.tk/api/itpk'

  return new Promise((resolve, reject) => {
    request
      .get(url)
      .query({ api_key, api_sercret, question: query })
      .then(res => {
        if (res.body) {
          const message = createTooMessage({ text: res.body })
          resolve(message)
        } else {
          resolve(commonErrorMessage)
        }
      })
  })
}

export function getSimsimi(query) {
  const url = 'http://www.niurenqushi.com/api/simsimi/'

  return new Promise((resolve, reject) => {
    request
      .post(url)
      .send({ txt: query })
      .type('form')
      .then(res => {
        if (res.body.code === 100000) {
          const message = createTooMessage({ text: res.body.text })
          resolve(message)
        } else {
          resolve(commonErrorMessage)
        }
      })
  })
}

export default getQinyunke
