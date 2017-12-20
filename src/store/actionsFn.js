import * as types from './actionTypes.js'

/*
 * action 创建函数
 */

export function setWindows(width, height) {
  return {
    type: types.SET_WINDOW_HEIGHT_WIDTH,
    width: width,
    height: height
  }
}

export function addHistory(id, message) {
  return {
    type: types.SET_HISTORY,
    message: message,
    id: id
  }
}
