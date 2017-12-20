/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import ConcatItem from 'base/concat-item/concat-item'
import './concat-tab.css'

function ConcatTab(props) {
  const width = 200
  const height = props.height - props.topHeight
  const tabData = props.tabData

  const concats = tabData.map((item, index) => (
    <li className="concat-item" key={index}>
      <ConcatItem name={item.name} avatar={item.avatar} />
    </li>
  ))
  return (
    <div className="concat-tab">
      <Scrollbars style={{ width, height }} autoHide autoHeightMin={100}>
        {concats}
      </Scrollbars>
    </div>
  )
}

export default ConcatTab
