/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './message-sender.css'

function MessageSender(props) {
  const sender = props.sender 
  const avatar = props.avatar
  return <div className="sender">
    <img src={avatar} alt="" />
    {sender && <span className="name">{sender}</span>}
  </div>
}

export default MessageSender