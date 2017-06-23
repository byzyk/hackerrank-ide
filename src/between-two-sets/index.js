import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////
function getTotalX(a, b) {
  // Complete this function
  let res = []
  let check = a[a.length - 1]
  while (check <= b[0]) {
    const check_a = a.map(item => check % item === 0)
    const check_b = b.map(item => item % check === 0)
    if (
      check_a.indexOf(false) === -1 &&
      check_b.indexOf(false) === -1 &&
      res.indexOf(check) === -1
    )
      res.push(check)
    check++
  }
  return res.length
}

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var m = parseInt(n_temp[1])
  let a = readLine().split(' ')
  a = a.map(Number)
  let b = readLine().split(' ')
  b = b.map(Number)
  var total = getTotalX(a, b)
  process.stdout.write('' + total + '\n')
}
