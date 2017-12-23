import createMessage from 'common/js/message.js'
const request = require('superagent')

const TURING_CODE = {
  TEXT: 100000,
  LINK: 200000,
  NEWS: 302000,
  MENU: 308000
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
          const message = createMessage({ type: 'Too', text: res.body.content })
          resolve(message)
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
        let message = createMessage({type:'Too',text:'获取错误'})
        if (code === TURING_CODE.TEXT) {
          message = createMessage({ type: 'Too', text })
        }
        if (code === TURING_CODE.LINK) {
          const linkList = [{ link: res.body.url }]
          message = createMessage({ type: 'Too', text, linkList })
        }
        if (code === TURING_CODE.NEWS) {
          const linkList = res.body.list.map(item => {
            return { title: item.article, link: item.detailurl }
          })
          message = createMessage({ type: 'TOO', text, linkList })
        }
        if (code === TURING_CODE.MENU) {
          const linkList = res.body.list.map(item => {
            return { title: item.name, link: item.detailurl, icon: item.icon }
          })
          message = createMessage({ type: 'Too', text, linkList })
          console.log(linkList)
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
      .query({ api_key, api_sercret, question:query })
      .then(res => {
        console.log(res)
        const message = createMessage({ type: 'Too', text: res.body })
        resolve(message)
    })
  })
}

export default getQinyunke
