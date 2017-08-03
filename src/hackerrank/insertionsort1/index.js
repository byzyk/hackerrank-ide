import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let arr = readLine().split(' ')
  arr = arr.map(Number)

  const num = arr[n - 1]
  for (let i = n - 1; i >= 0; i--) {
    if (num >= arr[i - 1]) {
      arr[i] = num
      console.log(arr.join(' '))
      break
    } else if (num < arr[i - 1]) {
      arr[i] = arr[i - 1]
      console.log(arr.join(' '))
    } else {
      arr[i] = num
      console.log(arr.join(' '))
    }
  }
}
