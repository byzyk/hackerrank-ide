import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function kDifference(a, k) {
  let res = 0
  const sorted = a.sort((x, y) => x - y)
  const len = sorted.length
  let i = 0,
    j = 0

  while (j < len) {
    let r = sorted[j] - sorted[i]
    if (r === k) {
      res++
      j++
    } else if (r < k) {
      j++
    } else if (r > k) {
      i++
    }
  }

  return res
}

function main() {
  const n = parseInt(readLine())
  let a = []
  for (let i = 0; i < n; i++) {
    a.push(parseInt(readLine()))
  }
  const k = parseInt(readLine())
  const res = kDifference(a, k)

  console.log(res)
}
