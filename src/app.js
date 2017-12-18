/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ConcatTab from './components/concat-tab/concat-tab'
import Header from 'base/header/header.js'
import ChatBox from 'components/chat-box/chat-box.js'
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

const slimChat = [
  {
    id: 1,
    title:'微软小冰',
    avatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
    meAvatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
    chatHistory: [
      {
        date: Date.now(),
        type: 'My',
        content: {
          text: '你好我是老刘',
          image: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg'
        }
      },
      {
        date: Date.now(),
        type: 'Too',
        content: {
          text: '你好我是老刘',
          image: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg'
        }
      },
      {
        date: Date.now(),
        type: 'Too',
        content: {
          text: '你好我是老刘',
          image: null
        }
      }
    ]
  }
]
class App extends React.Component {
  render() {
    return <div>
      <Header title={'微软小冰机器人'}/>
      <ConcatTab tabData={simData} topHeight={50} className="concat-tab" />
      <ChatBox chatContent={slimChat[0]} />
    </div>
  }
}

export default App
