import * as types from './actionTypes.js'
import { saveHistory } from 'common/js/cache.js'
import initialState from './initalState.js'

// 独立出去


export const robotApp = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_WINDOW_HEIGHT_WIDTH:
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      })
    case types.SET_HISTORY:
      // save
      let newhistory = addHistory(action.id, action.message, state.chatHistory)
      saveHistory(action.id, newhistory[action.id].history)
      return Object.assign({}, state, {
        chatHistory: newhistory
      })
    case types.CLEAR_HISTORY:
      return Object.assign({}, state, {
        chatHistory: clearHistory(action.id, state.chatHistory)
      })
    default:
      return state
  }
}

function addHistory(id, message = {}, chatData = []) {
  chatData = chatData.slice()
  const index = id
  const history = chatData[index].history.slice()

  const diffResult = historyDiffFindIndexof(history, message)
  // 目标拥有diff 并进行对比成功
  if (message.diffKey && diffResult > -1) {
    history[diffResult] = message
  } else {
    history.push(message)
  }
  chatData[index].history = history
  return chatData
}

function historyDiffFindIndexof(history, message) {
  history = history.slice()
  message = Object.assign({}, message)
  const index = history.findIndex(item => {
    return item.diffKey === message.diffKey
  })
  return index
}

function clearHistory(id, chatData = []) {
  chatData = chatData.slice()
  chatData[id].history = []
  return chatData
}

export default robotApp
