import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function oddNumbers(l, r) {
  let res = []
  let arr = []
  for (let i = 1; i <= r; i++) {
    arr.push(i)
  }
  arr.splice(0, l - 1)
  res = arr.filter(item => item % 2 !== 0)

  return res.join('\n')
}

function main() {
  const l = parseInt(readLine())
  const r = parseInt(readLine())
  const res = oddNumbers(l, r)

  console.log(res)
}
