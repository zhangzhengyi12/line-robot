/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import MessageContent from 'base/message-content/message-content.js'
import MesssageSender from 'base/message-sender/message-sender.js'
import './message.css'
import Loading from 'base/loading/loading.js'
import loading from '../loading/loading'

function Message(props) {
  const text = props.content.text
  const linkList = props.content.linkList.map((item, index) => {
    return (
      <span className="link-list" style={{ lineHeight: '30px' }} key={index}>
        {index === 0 && <br />}
        {item.icon && <img src={item.icon} alt="" width='30' height='30' style={{borderRadius:'50%'}} />}
        <a href={item.link}>{item.title}</a> <br />
      </span>
    )
  })
  const content = props.loading ? <Loading /> : <span className="text">{text}</span>

  return (
    <div className={' message ' + props.pos}>
      <div className="sender-box">
        <MesssageSender avatar={props.avatar} sender={props.title} />
      </div>
      <div className="content-box">
        <MessageContent pos={props.pos}>
          {content}
          {linkList}
        </MessageContent>
      </div>
    </div>
  )
}

export default Message
