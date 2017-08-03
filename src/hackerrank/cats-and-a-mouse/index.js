import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  let res = []
  var q = parseInt(readLine())
  for (var a0 = 0; a0 < q; a0++) {
    var x_temp = readLine().split(' ')
    var x = parseInt(x_temp[0])
    var y = parseInt(x_temp[1])
    var z = parseInt(x_temp[2])

    if (Math.abs(z - x) > Math.abs(z - y)) res.push('Cat B')
    if (Math.abs(z - x) < Math.abs(z - y)) res.push('Cat A')
    if (Math.abs(z - x) === Math.abs(z - y)) res.push('Mouse C')
  }

  console.log(res.join('\n'))
}
