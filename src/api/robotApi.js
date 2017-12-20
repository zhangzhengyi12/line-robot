import createMessage from 'common/js/message.js'
const request = require('superagent')

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

export default getQinyunke
