import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let count = new Array()
  const half = n / 2
  for (let i = 0; i < n; i++) {
    const temp = readLine().split(' ')
    if (i < half) temp[1] = '-'

    if (!count[+temp[0]]) count[+temp[0]] = []
    count[+temp[0]].push(temp[1])
  }

  console.log([].concat(...count).join(' '))
}
