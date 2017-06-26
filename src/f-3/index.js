import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function counts(nums, maxes) {
  let res = new Array(maxes.length).fill(0)

  maxes.forEach((m, i) => {
    nums.forEach(n => {
      if (n <= m) res[i]++
    })
  })

  return res
}

function main() {
  const n = parseInt(readLine())
  let nums = []
  for (let i = 0; i < n; i++) {
    nums.push(parseInt(readLine()))
  }
  const m = parseInt(readLine())
  let maxes = []
  for (let i = 0; i < m; i++) {
    maxes.push(parseInt(readLine()))
  }
  const res = counts(nums, maxes)

  console.log(res)
}
