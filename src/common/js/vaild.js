


export default function vaildity() {
  let cache = []
  let args = []
  return {
    add: function (fn,...arg) {
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