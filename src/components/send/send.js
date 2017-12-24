/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './send.css'

class Send extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }
  onQueryChange(e) {
    this.setState({ query: e.target.value })
  }
  send() {
    const query = this.state.query
    if (!query) return
    this.props.sendHandle(query)
    this.clear()
  }
  clear() {
    this.setState({
      query:''
    })
  }
  keydown(e) {
    if (e.keyCode === 13 && e.ctrlKey) {
      this.send()
    }
  }
  render() {
    const width = this.props.width
    const textareaHeight = this.props.height - 40
    return (
      <div className="send">
        <textarea
          style={{ width: width + 'px', height: textareaHeight + 'px' }}
          value={this.state.query}
          onChange={e => {
            this.onQueryChange(e)
          }}
          onKeyDown={e => {
            this.keydown(e)
          }}
        />
        <div className="send-btn-wrapper">
          <button
            onClick={e => {
              this.send()
            }}
          >
            {this.props.sendText}
          </button>
        </div>
      </div>
    )
  }
}

export default Send
