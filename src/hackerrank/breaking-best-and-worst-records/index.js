import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function getRecord(s) {
  // Complete this function
  let res = [0, 0]
  let maxmin = [s[0], s[0]]

  s.forEach(score => {
    if (score > maxmin[0]) {
      maxmin[0] = score
      res[0]++
    } else if (score < maxmin[1]) {
      maxmin[1] = score
      res[1]++
    }
  })

  return res
}

function main() {
  var n = parseInt(readLine())
  let s = readLine().split(' ')
  s = s.map(Number)
  var result = getRecord(s)
  console.log(result.join(' '))
}
