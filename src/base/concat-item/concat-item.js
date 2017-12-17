/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './concat-item.css'

class ConcatItem extends React.Component {
  render() {
    const avatar = this.props.avatar
    const text = this.props.name

    return (
      <div className="item">
        <span className="avatar-wrapper">
          <img src={avatar} alt={text} className="avatar" />
        </span>
          <span className="name">{text}</span>
      </div>
    )
  }
}

export default ConcatItem