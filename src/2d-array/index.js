import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var arr = []
  for (let arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ')
    arr[arr_i] = arr[arr_i].map(Number)
  }

  const size = arr.length - 2
  let sum = []

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sum.push(
        arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2]
      )
    }
  }

  console.log(Math.max(...sum))
}
