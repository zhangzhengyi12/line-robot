/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './concat-item.css'
import wasteIMG from './waste.svg'

class ConcatItem extends React.Component {
  render() {
    const avatar = this.props.avatar
    const text = this.props.name
    return (
      <div className={" item " +  this.props.activeClass}>
        <span className="avatar-wrapper">
          <img src={avatar} alt={text} className="avatar" />
        </span>
        <span className="name">{text}</span>
        <span className='clear' onClick={() => { this.props.handleClickClear(this.props.index) }}>
          <img alt="" src={wasteIMG} width="20" height="20"/>
        </span>
      </div>
    )
  }
}

export default ConcatItem
