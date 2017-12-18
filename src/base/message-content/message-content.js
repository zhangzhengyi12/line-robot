/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './message-content.css'

function MessageContent(props) {
  const text = props.content.text
  const imageURL = props.content.image
  return (
    <div className="message-content">
      <span className={props.pos + ' arrow '} />
      {text && <span className="text">text</span>}
      {imageURL && <img alt="null" src={imageURL} />}
    </div>
  )
}

export default MessageContent
