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

function fib(n) {
  let current = 1
  let cache = [0, 1, 1]
  while (current <= n) {
    if (current !== 1 && current !== 2) {
      cache[current] = cache[current - 1] + cache[current - 2]
    }
    current++
  }
  return cache.pop()
}

function fib2(n) {
  if (n <= 1) return n
  return fib2(n-1) + fib2(n-2)
}

function unary(arr) {
  return arr.filter((item, index) => {
    const fined = arr.indexOf(item)
    return fined >-1 && fined === index 
  })
}