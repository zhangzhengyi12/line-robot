import * as robots from './robotApi.js'
export function getRobotRes(robotId, query) {
  // all return promise object
  switch (robotId) {
    case 0:
      return robots.getQinyunke(query)
    default:
      return Promise.reject('cant find robot')
  }
}