import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function solve(n, s, d, m) {
  // Complete this function
  let res = 0
  while (n > 0) {
    const bar = s.slice(n - m, n)
    if (bar.length === m) {
      const days = bar.reduce((a, b) => a + b, 0)
      if (days === d) res++
      n--
    } else {
      break
    }
  }
  return res
}

function main() {
  var n = parseInt(readLine())
  let s = readLine().split(' ')
  s = s.map(Number)
  var d_temp = readLine().split(' ')
  var d = parseInt(d_temp[0])
  var m = parseInt(d_temp[1])
  var result = solve(n, s, d, m)
  process.stdout.write('' + result + '\n')
}
