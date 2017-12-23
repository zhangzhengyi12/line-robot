/* eslint-disable  no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'

function Header(props) {
  return <div className="header">
    <span className="header-title">正在与 {props.title} 对话中</span>
    <span className="child-title">欢迎你 {props.childTitle}</span>
  </div>
}

export default Header