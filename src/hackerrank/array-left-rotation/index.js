import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var d = parseInt(n_temp[1])
  let arr = readLine().split(' ')
  arr = arr.map(Number)

  let newArr = []
  for (let i = 0; i < n; i++) {
    newArr[(i + n - d) % n] = arr[i]
  }

  console.log(newArr.join(' '))
}
