/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ConcatTab from './components/concat-tab/concat-tab'
import Header from 'base/header/header.js'
import './app.css'

const simData = [
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 1
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 2
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 3
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 4
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 5
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 6
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 7
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 8
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 9
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 10
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 11

  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 12
  },
  {
    name: 'xiaobing',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
    id: 13
  }
]

class App extends React.Component {
  render() {
    return <div>
      <Header title={'微软小冰机器人'}/>
      <ConcatTab tabData={simData} topHeight={50} className="concat-tab" />
    </div>
  }
}

export default App
