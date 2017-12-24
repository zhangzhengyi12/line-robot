import * as robots from './robotApi.js'
export function getRobotRes(robotId, query, userId) {
  // all return promise object
  switch (robotId) {
    case 0:
      return robots.getQinyunke(query)
    case 1: 
      return robots.getTuring(query, userId)
    case 2:
      return robots.getITPK(query)
    case 3: 
      return robots.getSimsimi(query)  
    default:
      return Promise.reject('cant find robot')
  }
}