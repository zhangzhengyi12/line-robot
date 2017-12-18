/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import Message from 'base/message/message.js'
import './chat.css'

class Chat extends React.Component {
  render() {
    const data = this.props.chatContent
    const messages = data.chatHistory.map((mess,index) => {
      let avatar
      let title
      let pos

      if (mess.type === 'My') {
        avatar = data.meAvatar
        title = ''
        pos = 'right'
      } else {
        avatar = data.avatar
        title = data.title
        pos = 'left'
      }

      return <Message {...mess} title={title} avatar={avatar} pos={pos} key={index}/>
    })
    return <div className="chat">{messages}</div>
  }
}

export default Chat
