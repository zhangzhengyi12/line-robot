/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ConcatTab from './components/concat-tab/concat-tab'
import { connect } from 'react-redux'
import Header from 'base/header/header.js'
import ChatBox from 'components/chat-box/chat-box.js'
import './app.css'
import { setWindows, addHistory, clearHistory } from './store/actionsFn.js'
import { throttle } from 'common/js/util.js'
import { getRobotRes } from './api/getRobotRes.js'
import createMessage from 'common/js/message.js'
import creatMessageObject from './common/js/message'
import Propmt from 'base/prompt/prompt.js'
import { loadavg } from 'os'

// TODO: 询问用户名 验证 > 设置图灵机器人API 提供图片展示。

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      concatId: 0,
      userID: '',
      show: true,
      userName: ''
    }
  }
  componentDidMount() {
    window.onresize = throttle(e => {
      const width = window.innerWidth
      const height = window.innerHeight
      this.props.dispatch(setWindows(width, height))
    }, 50)

    // 检测是否存在本地userName
    if (localStorage.userName !== undefined) {
      this.setState({
        show: false,
        userName: localStorage.userName
      })
    }
  }
  sendMessage(query) {
    // 本地添加数据并远程请求
    const concatId = this.state.concatId
    const diffKey = Math.random()
    const localMessage = creatMessageObject({ type: 'My', text: query })
    const placeHolderMessage = creatMessageObject({ type: 'Too', text: 'wait....', diffKey, isPlace: true })
    // local
    this.props.dispatch(addHistory(concatId, localMessage))
    // placeHolder Response
    this.props.dispatch(addHistory(concatId, placeHolderMessage))
    this.timeOutRefreshChatBox()
    // Loading动画
    getRobotRes(concatId, query, this.state.userName).then(res => {
      res = Object.assign(res, {
        diffKey
      })
      this.props.dispatch(addHistory(concatId, res))
      this.timeOutRefreshChatBox()
    })
  }
  setUserName(name) {
    // username应该通过本地保存。
    this.setState({
      userName: name,
      show: false
    })
    localStorage.userName = name
  }
  clearHistory(id) {
    if (window.confirm('确定要删除历史消息吗')) {
    this.props.dispatch(clearHistory(id))
    }
  }
  loginOut() {
    if (window.confirm('确定要登出吗')) {
      localStorage.clear()
    }
  }
  timeOutRefreshChatBox() {
    setTimeout(() => {
      this.chatBox.scrollToBottom()
    }, 10)
  }
  render() {
    const { dispatch, width, height, chatHistory, chatRobotList } = this.props
    const currentChat = chatHistory[this.state.concatId]

    return (
      <div>
        <Header title={currentChat.title} childTitle={this.state.userName} handleClickOut={()=>{this.loginOut()}} />
        <ConcatTab
          tabData={chatRobotList}
          topHeight={50}
          className="concat-tab"
          height={height}
          handleClick={id =>
            this.setState({
              concatId: id
            })
          }
          activeIndex={this.state.concatId}
          handleClickClear={(id)=>{this.clearHistory(id)}}
        />
        <ChatBox
          chatContent={currentChat}
          height={height}
          width={width}
          sendHandle={query => this.sendMessage(query)}
          ref={e => {
            this.chatBox = e
          }}
        />
        <Propmt
          show={this.state.show}
          title="欢迎，请输入你的用户名"
          btn="确认"
          tips="支持0-9，a-z,A-Z组合，不能包含特殊字符"
          handleClick={name => this.setUserName(name)}
        />
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
