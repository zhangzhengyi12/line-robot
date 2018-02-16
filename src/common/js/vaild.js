export default function vaildity() {
  let cache = []
  let args = []
  return {
    add: function(fn, ...arg) {
      cache.push(fn)
      args.push(arg)
    },
    start() {
      let res = true
      cache.forEach((fn, i) => {
        let arg = args[i]
        console.log(arg)
        if (fn(...arg) === false) {
          res = false
        }
      })
      return res
    }
  }
}

function* fibGenator() {
  let [prev, next] = [0, 1]
  for (;;) {
    ;[prev, next] = [next, prev + next]
    yield next
  }
}

function* zhuangtaiji() {
  let open = 'OPEN'
  let close = 'CLOSE'
  let middle = 'MIDDLE'

  while (true) {
    yield open
    yield close
    yield middle
  }
}
