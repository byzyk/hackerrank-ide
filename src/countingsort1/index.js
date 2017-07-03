import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let arr = readLine().split(' ')
  arr = arr.map(Number)

  let count = new Array(100).fill(0)
  for (let i = 0; i < n; i++) {
    count[arr[i]]++
  }

  console.log(count.join(' '))
}
