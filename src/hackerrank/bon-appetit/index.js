import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////
function bonAppetit(n, k, b, ar) {
  // Complete this function
  let res = ''

  const ACTUAL_BILL = ar.reduce((a, b) => a + b, 0)
  const ANNA_ARR = [...ar]
  ANNA_ARR.splice(k, 1)
  const ANNA_BILL = ANNA_ARR.reduce((a, b) => a + b, 0) / 2

  if (b > ANNA_BILL) {
    res = ar[k] / 2
  } else {
    res = 'Bon Appetit'
  }

  return res
}

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var k = parseInt(n_temp[1])
  let ar = readLine().split(' ')
  ar = ar.map(Number)
  var b = parseInt(readLine())
  var result = bonAppetit(n, k, b, ar)
  process.stdout.write('' + result + '\n')
}
