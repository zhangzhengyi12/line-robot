/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import Chat from 'components/chat/chat.js'
import './chat-box.css'
import { Scrollbars } from 'react-custom-scrollbars'
import Send from 'components/send/send.js'

class ChatBox extends React.Component {
  scrollToBottom() {
    this.scroll.scrollToBottom()
  }
  render() {
    let width = this.props.width - 200
    let height = this.props.height - 150
    return (
      <div className="chat-box">
        <Scrollbars style={{ width, height }} autoHide className="chat-wrapper" ref={e=>{ this.scroll = e }}>
          <Chat chatContent={this.props.chatContent} />
        </Scrollbars>
        <Send sendText="发送(<C-E>)" width={width} height={100} sendHandle={this.props.sendHandle} />
      </div>
    )
  }
}

export default ChatBox
