import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var t = parseInt(readLine())
  let res = []
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine())

    let H = 1
    if (n) {
      for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
          H *= 2
        } else {
          H += 1
        }
      }
    }
    res.push(H)
  }

  console.log(res.join('\n'))
}
