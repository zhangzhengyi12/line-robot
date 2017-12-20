/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './message-content.css'

function MessageContent(props) {
  return (
    <div className={"message-content " + props.pos}>
      <span className={props.pos + ' arrow '} />
      {props.children}
    </div>
  )
}

export default MessageContent
