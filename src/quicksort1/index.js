import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let arr = readLine().split(' ')
  arr = arr.map(Number)

  const p = arr.splice(0, 1)
  let eq = [p],
    left = [],
    right = []

  arr.forEach(item => {
    if (item > p) {
      right.push(item)
    } else if (item < p) {
      left.push(item)
    }
  })

  console.log([...left, ...eq, ...right].join(' '))
}
