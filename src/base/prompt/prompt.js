/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './prompt.css'
import vaildity from 'common/js/vaild.js'

const MAX_VALUE_LENGTH = 10

class Prompt extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      error: false
    }
  }
  valid() {
    const value = this.state.value
    const validObj = vaildity()
    const REG = new RegExp(/^[A-Za-z0-9]+$/g)
    validObj.add(isLengthTooLong, value, MAX_VALUE_LENGTH)
    validObj.add(isNotPassRegMatch, value, REG)

    if (!validObj.start()) {
      this.setState({
        error: true
      })
      return false
    }
    return true
  }
  sure() {
    if (!this.valid()) {
      return
    }
    this.props.handleClick(this.state.value)
  }
  render() {
    return this.props.show ? (
      <div className="prompt">
        <div className="prompt-wrapper">
          <h3 className="title">{this.props.title}</h3>
          <input
            className={' input ' + (this.state.error ? ' error ' : '')}
            value={this.state.value}
            onChange={e => {
              this.setState({ value: e.target.value })
            }}
            ref={e => (this.input = e)}
          />
          <button
            className="btn"
            onClick={e => {
              this.sure()
            }}
          >
            {this.props.btn}
          </button>
          <div className="tips">{this.props.tips}</div>
        </div>
      </div>
    ) : (
      ''
    )
  }
}

function isLengthTooLong(value, length) {
  return value.length < length
}

function isNotPassRegMatch(value, reg) {
  return reg.test(value)
}

export default Prompt
