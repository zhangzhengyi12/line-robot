import { getHistory } from 'common/js/cache.js'

export default {
  height: window.innerHeight,
  width: window.innerWidth,
  chatRobotList: [
    {
      name: '青云客',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/car.png',
      id: 0
    },
    {
      name: '图灵机器人',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/icon40.png',
      id: 1
    },
    {
      name: '茉莉',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171224225712.png',
      id: 2
    },
    {
      name: '小黄鸡',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/ji.jpg',
      id: 3
    }
  ],
  chatHistory: [
    {
      id: 0,
      title: '青云客',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
      meAvatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
      history: getHistory(0)
    },
    {
      id: 1,
      title: '图灵',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/icon40.png',
      meAvatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
      history: getHistory(1)
    },
    {
      id: 2,
      title: '茉莉',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171224225712.png',
      meAvatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
      history: getHistory(2)
    },
    {
      id: 3,
      title: '小黄鸡',
      avatar: 'http://ot7z7wqqo.bkt.clouddn.com/ji.jpg',
      meAvatar: 'http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720171202164404.jpg',
      history: getHistory(3)
    }
  ]
}
