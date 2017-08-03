import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  let h = readLine().split(' ')
  h = h.map(Number)
  var w = readLine()

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const word = w.split('')

  const width = word.length
  let height = 0

  word.forEach((item, i) => {
    const letterH = h[alphabet.indexOf(item)]
    if (letterH > height) height = letterH
  })

  console.log(width * height)
}
