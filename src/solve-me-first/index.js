import { readLine } from '../../lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b
}

export function main() {
  // write your code here.
  // call `readLine()` to read a line.
  // use console.log() to write to stdout

  var a = parseInt(readLine())
  var b = parseInt(readLine())

  var res = solveMeFirst(a, b)
  console.log(res)
}
