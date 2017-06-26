import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let a = readLine().split(' ')
  a = a.map(Number)
  let count = []

  a.forEach((item, i) => {
    let countTemp = 0
    let arrTemp = [...a]
    arrTemp.splice(i, 1)
    arrTemp.forEach(item_arr => {
      if (Math.abs(item_arr - item) <= 1) {
        countTemp++
      }
    })

    count.push(countTemp)
  })

  console.log(count)

  console.log(Math.max(...count))
}
