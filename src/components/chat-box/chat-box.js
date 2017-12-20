/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import Chat from 'components/chat/chat.js'
import './chat-box.css'
import { Scrollbars } from 'react-custom-scrollbars'
import Send from 'components/send/send.js'

function ChatBox(props) {
  let width = props.width - 200
  let height = props.height - 150
  return (
    <div className="chat-box">
      <Scrollbars style={{ width, height }} autoHide className="chat-wrapper">
        <Chat chatContent={props.chatContent} />
      </Scrollbars>
      <Send sendText="发送(<C-E>)" width={width} height={100} sendHandle={props.sendHandle} />
    </div>
  )
}

export default ChatBox
