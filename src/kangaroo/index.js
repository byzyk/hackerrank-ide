import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function kangaroo(x1, v1, x2, v2) {
  // Complete this function
  let i = 10000
  let result = 'NO'
  let dist = [x1, x2]
  while (i >= 0) {
    dist[0] += v1
    dist[1] += v2
    if (dist[0] === dist[1]) {
      result = 'YES'
      break
    }
    i--
  }
  return result
}

function main() {
  var x1_temp = readLine().split(' ')
  var x1 = parseInt(x1_temp[0])
  var v1 = parseInt(x1_temp[1])
  var x2 = parseInt(x1_temp[2])
  var v2 = parseInt(x1_temp[3])
  var result = kangaroo(x1, v1, x2, v2)
  process.stdout.write('' + result + '\n')
}
