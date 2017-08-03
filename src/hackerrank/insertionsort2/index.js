import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let arr = readLine().split(' ')
  arr = arr.map(Number)

  for (let i = 1; i < n; i++) {
    const num = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = num
    console.log(arr.join(' '))
  }
}
