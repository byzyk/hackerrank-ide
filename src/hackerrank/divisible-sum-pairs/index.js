import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function divisibleSumPairs(n, k, ar) {
  // Complete this function
  let res = 0
  let checkArr = [...ar]

  ar.forEach((item, i) => {
    checkArr.shift()

    checkArr.forEach(check_item => {
      if ((item + check_item) % k === 0) res++
    })
  })

  return res
}

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var k = parseInt(n_temp[1])
  let ar = readLine().split(' ')
  ar = ar.map(Number)
  var result = divisibleSumPairs(n, k, ar)
  process.stdout.write('' + result + '\n')
}
