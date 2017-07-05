import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  const t = parseInt(readLine())
  let res = []
  for (let i = 0; i < t; i++) {
    const n = parseInt(readLine())
    let arr = readLine().split(' ')
    arr = arr.map(Number)

    res.push(count(arr, n))
  }

  function count(arr, n) {
    let res = 0
    for (let i = 1; i < n; i++) {
      const num = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > num) {
        arr[j + 1] = arr[j]
        j = j - 1
        res++
      }
      arr[j + 1] = num
    }
    return res
  }

  console.log(res.join('\n'))
}
