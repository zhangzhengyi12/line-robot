import React from 'react'
import ReactDOM from 'react-dom'
import BetterScroll from 'better-scroll'


class Scroll extends React.Component {
  render() {
    return <div class="scroll-wrapper" ref={(el)=>{this.scrollWrapper = el}}>
     {this.props.children}
    </div>
  }
  _initScroll() {
    if (!this.scrollWrapper) {
      return
    } 
    const probeType = this.props.probeType ? this.props : 1
    const click = this.props.click ? this.props.click : true
    this.scoll = new BetterScroll(this.scrollWrapper, {
      probeType:
    })
  }
}