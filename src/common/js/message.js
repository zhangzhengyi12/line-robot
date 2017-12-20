export default function creatMessageObject(data) {
  const diffKey = data.diffKey ? data.diffKey : null
  const type = data.type ? data.type : 'My'
  const text = data.text ? data.text : '文本出错'
  const images = data.images ? data.images : []
  return {
    diffKey,
    data: Date.now(),
    type,
    content: {
      text,
      images
    }
  }
}
