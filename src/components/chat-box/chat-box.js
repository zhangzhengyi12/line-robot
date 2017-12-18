/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import Chat from 'components/chat/chat.js'
import './chat-box.css'
import { Scrollbars } from 'react-custom-scrollbars'

class ChatBox extends React.Component { 
  
  render() {
    let width = window.innerWidth - 200
    let height = window.innerHeight - 150

    //TODO: Redux Reset windows.height
    
    return <div className="chat-box">
      <Scrollbars style={{ width, height }} autoHide>  
        <Chat chatContent={this.props.chatContent}   />
      </Scrollbars>  
    </div>
  }
}


export default ChatBox