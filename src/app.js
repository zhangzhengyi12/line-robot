/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ConcatTab from './components/concat-tab/concat-tab'
import { connect } from 'react-redux'
import Header from 'base/header/header.js'
import ChatBox from 'components/chat-box/chat-box.js'
import './app.css'
import { setWindows, addHistory } from './store/actionsFn.js'
import { throttle } from 'common/js/util.js'
import { getRobotRes } from './api/getRobotRes.js'
import createMessage from 'common/js/message.js'
import creatMessageObject from './common/js/message'

// TODO: 发言自动跳转到末端

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      concatId: 0
    }
  }
  componentDidMount() {
    window.onresize = throttle(e => {
      const width = window.innerWidth
      const height = window.innerHeight
      this.props.dispatch(setWindows(width, height))
    }, 50)
  }
  sendMessage(query) {
    // 本地添加数据并远程请求
    // may be loading
    const concatId = this.state.concatId
    const diffKey = Math.random()
    const localMessage = creatMessageObject({ type: 'My', text: query })
    const placeHolderMessage = creatMessageObject({ type: 'Too', text: 'wait....', diffKey })
    // local
    this.props.dispatch(addHistory(concatId, localMessage))
    // placeHolder Response
    this.props.dispatch(addHistory(concatId, placeHolderMessage))
    // Loading动画，通过对diff一个随机数的比较做到，如果一致就替代，findinxOf 先去Push一个空的回复
    getRobotRes(concatId, query).then(res => {
      res = Object.assign(res, {
        diffKey
      })
      this.props.dispatch(addHistory(concatId, res))
    })
  }
  render() {
    const { dispatch, width, height, chatHistory, chatRobotList } = this.props
    const currentChat = chatHistory[this.state.concatId]
    return (
      <div>
        <Header title={'微软小冰机器人'} />
        <ConcatTab tabData={chatRobotList} topHeight={50} className="concat-tab" height={height} />
        <ChatBox chatContent={currentChat} height={height} width={width} sendHandle={query => this.sendMessage(query)} />
      </div>
    )
  }
}

function select(state) {
  return {
    width: state.width,
    height: state.height,
    chatRobotList: state.chatRobotList,
    chatHistory: state.chatHistory
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)
