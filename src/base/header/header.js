/* eslint-disable  no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'
import powserIcon from './power.svg'

function Header(props) {
  return <div className="header">
    <span className="header-title">正在与 {props.title} 对话中</span>
    <span className="child-title">欢迎你 {props.childTitle}</span>
    <span className='login-out'>
      <img alt="" src={powserIcon} width='20' height='20' onClick={props.handleClickOut} />
    </span>
  </div>
}

export default Header