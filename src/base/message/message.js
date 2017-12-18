/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import MessageContent from 'base/message-content/message-content.js'
import MesssageSender from 'base/message-sender/message-sender.js'
import './message.css'


function Message(props) {
  return <div className={' message ' + props.pos}>
    <div className='sender-box'><MesssageSender avatar={props.avatar} sender={props.title}  /></div>
    <div className='content-box'><MessageContent content={props.content}  pos={props.pos}/> </div>
  </div>
}

export default Message