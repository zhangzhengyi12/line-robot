/* eslint-disable  no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'

function Header(props) {
  return <div className="header">
    <span className="header-title">{props.title}</span>
  </div>
}

export default Header