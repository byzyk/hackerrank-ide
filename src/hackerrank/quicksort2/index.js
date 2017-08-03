import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let arr = readLine().split(' ')
  arr = arr.map(Number)
  ;(function s(ar) {
    if (ar.length < 2) {
      return
    }
    const p = ar.splice(0, 1)
    let left = [],
      right = [],
      sorted = []

    ar.forEach(item => {
      if (item < p) {
        left.push(item)
      } else if (item > p) {
        right.push(item)
      }
    })

    if (left.length > 1) left = s(left)
    if (right.length > 1) right = s(right)

    sorted = [...left, ...p, ...right]

    console.log(sorted.join(' '))
    return sorted
  })(arr)
}
