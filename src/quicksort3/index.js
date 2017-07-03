import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let arr = readLine().split(' ')
  arr = arr.map(Number)

  const swap = (a, x, y) => {
    const memo = a[x]
    a[x] = a[y]
    a[y] = memo
    return a
  }
  ;(function qsort(arr, st, en) {
    if (en - st <= 0) return arr

    const p = arr[en]
    let i = st
    let j = i
    while (j < en) {
      if (arr[j] <= p) {
        arr = swap(arr, j, i)
        i++
      }
      j++
    }
    swap(arr, i, en)
    console.log(arr.join(' '))
    arr = qsort(arr, st, i - 1)
    arr = qsort(arr, i + 1, en)
    return arr
  })(arr, 0, n - 1)
}
