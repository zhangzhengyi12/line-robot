const KEY = 'history_'
export function saveHistory(id, value) {
  localStorage[KEY + id] = JSON.stringify(value)
}

export function getHistory(id) {
  const val = localStorage[KEY + id]
  if (val) {
    return JSON.parse(val)
  } else {
    return []
  }
}
