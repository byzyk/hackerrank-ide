import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let ar = readLine().split(' ')
  ar = ar.map(Number)
  let res = 0

  ar.sort((a, b) => a - b)
  res = ar[Math.floor(n / 2)]

  process.stdout.write('' + res + '\n')
}
