export default function creatMessageObject(data) {
  const diffKey = data.diffKey ? data.diffKey : null
  const type = data.type ? data.type : 'My'
  const text = data.text ? data.text : '文本出错'
  const isPlace = data.isPlace ? data.isPlace : false
  const linkList = data.linkList ? data.linkList : []
  return {
    diffKey,
    data: Date.now(),
    type,
    content: {
      text,
      linkList
    },
    isPlace
  }
}
