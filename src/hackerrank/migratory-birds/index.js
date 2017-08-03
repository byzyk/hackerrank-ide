import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function migratoryBirds(n, ar) {
  // Complete this function
  let res = 0
  let max = 0
  let count = new Array(n).fill(0)
  ar.forEach(item => {
    count[item]++
  })
  count.forEach((item, i) => {
    if (item > max) {
      max = item
      res = i
    }
  })
  return res
}

function main() {
  var n = parseInt(readLine())
  let ar = readLine().split(' ')
  ar = ar.map(Number)
  var result = migratoryBirds(n, ar)
  process.stdout.write('' + result + '\n')
}
