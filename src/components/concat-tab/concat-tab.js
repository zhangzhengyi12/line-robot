/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import ConcatItem from 'base/concat-item/concat-item'
import './concat-tab.css'



class ConcatTab extends React.Component{
  constructor() {
    super()
    this.state = {
      height: window.innerHeight
    }
  }
  componentDidMount() {
    window.onresize = () => {
      this.refreshConcatHeight()
    }
  }
  refreshConcatHeight() {
    this.setState({
      height:window.innerHeight
    })
  }
  render() {
    const width = 200
    const height = this.state.height - this.props.topHeight
    const tabData = this.props.tabData
    
    const concats = tabData.map((item,index) => 
      <li><ConcatItem name={item.name} avatar={item.avatar} key={index}  /></li>
    )
    return <div className="concat-tab" ref={el => { this.concatTab = el }}>
      <Scrollbars style={{ width, height }}  autoHide autoHeightMin={100}>
        {concats}
      </Scrollbars>
    </div>
   }
}

export default ConcatTab