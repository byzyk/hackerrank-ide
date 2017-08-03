import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var s = readLine()
  const regex = new RegExp(/[A-Z]/)
  const res = s.split(regex).length
  console.log(res)
}
