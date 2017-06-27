import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let a = readLine().split(' ')
  a = a.map(Number)
  let max = 0

  for (let i in a) {
    let x = [...a].filter(item => item === a[i]).length
    let y = [...a].filter(item => item === a[i] - 1).length
    x = x + y
    if (x > max) max = x
  }

  console.log(max)
}
