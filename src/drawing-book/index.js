import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function solve(n, p) {
  // Complete this function
  let res = 0
  let pagesTurned = [0, 0]

  const checkEnd = n % 2 === 0 ? p : p + 1

  for (let i = 1, j = n; i <= n; i += 2, j -= 2) {
    if (p > i) {
      pagesTurned[0]++
    } else {
      break
    }
    if (checkEnd < j) {
      pagesTurned[1]++
    } else {
      break
    }
  }
  res = Math.min(...pagesTurned)
  return res
}

function main() {
  var n = parseInt(readLine())
  var p = parseInt(readLine())
  var result = solve(n, p)
  process.stdout.write('' + result + '\n')
}
