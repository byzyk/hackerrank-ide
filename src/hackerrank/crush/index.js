import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var m = parseInt(n_temp[1])

  let arr = new Array(n + 1).fill(0)
  while (m-- > 0) {
    let temp = readLine().split(' ')
    temp = temp.map(Number)

    const a = temp[0]
    const b = temp[1]
    const k = temp[2]

    arr[a - 1] += k
    arr[b] -= k
  }

  let sum = 0
  let max = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
    max = Math.max(max, sum)
  }

  console.log(max)
}
