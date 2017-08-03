import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = readLine()
  let steps = readLine().split('')
  steps = steps.map(String)

  let res = 0
  let level = 0
  let track = []

  steps.forEach((step, i) => {
    if (step === 'U') level++
    if (step === 'D') level--
    track.push(level)

    if (level === 0 && track[i - 1] < 0) res++
  })

  console.log(res)
}
