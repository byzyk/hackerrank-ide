import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var k = parseInt(n_temp[1])
  let height = readLine().split(' ')
  height = height.map(Number)
  // your code goes here

  let res = 0
  let max = 0
  height.forEach(item => {
    if (item > k) {
      res = item - k
      max = Math.max(max, res)
    }
  })

  console.log(max)
}
