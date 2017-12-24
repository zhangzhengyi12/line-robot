/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import Message from 'base/message/message.js'
import './chat.css'

class Chat extends React.Component {
  render() {
    const data = this.props.chatContent
    const messages = data.history.map((mess,index) => {
      let avatar
      let title
      let pos
      let isPlace

      if (mess.type === 'My') {
        avatar = data.meAvatar
        title = ''
        pos = 'right'
      } else {
        avatar = data.avatar
        title = data.title
        pos = 'left'
      }
      if (mess.isPlace) {
        isPlace = mess.isPlace
      }
      return <Message {...mess} title={title} avatar={avatar} pos={pos} key={index} loading={isPlace}/>
    })
    return <div className="chat">{messages}</div>
  }
}

export default Chat
