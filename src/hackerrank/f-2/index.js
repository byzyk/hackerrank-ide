import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function mergeArrays(a, b) {
  let res = [...a, ...b]
  res = res.sort((a, b) => a - b)

  return res
}

function main() {
  const n = parseInt(readLine())
  let a = []
  for (let i = 0; i < n; i++) {
    a.push(parseInt(readLine()))
  }
  const n_temp = parseInt(readLine())
  let b = []
  for (let i = 0; i < n; i++) {
    b.push(parseInt(readLine()))
  }
  const res = mergeArrays(a, b)

  console.log(res)
}
