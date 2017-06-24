import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function sockMerchant(n, ar) {
  // Complete this function
  let res = 0
  let unique = []

  ar.forEach((item, i) => {
    if (unique.indexOf(item) === -1) unique.push(item)
  })

  let count = new Array(unique.length).fill(0)

  unique.forEach((un, i) => {
    ar.forEach(item => {
      if (item === un) count[i]++
    })
  })

  count = count.map(item => Math.floor(item / 2))
  res = count.reduce((a, b) => a + b, 0)

  return res
}

function main() {
  var n = parseInt(readLine())
  let ar = readLine().split(' ')
  ar = ar.map(Number)
  var result = sockMerchant(n, ar)
  process.stdout.write('' + result + '\n')
}
