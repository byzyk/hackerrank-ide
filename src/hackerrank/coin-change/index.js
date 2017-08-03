import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function getWays(n, m, coins) {
  let res = new Array(n).fill(0)
  res.push(1)
  res.reverse()

  coins.forEach(coin => {
    for (let j = coin; j < n + 1; j++) {
      res[j] += res[j - coin]
    }
  })

  return res[n]
}

function main() {
  var n_temp = readLine().split(' ')
  var n = parseInt(n_temp[0])
  var m = parseInt(n_temp[1])
  let c = readLine().split(' ')
  c = c.map(Number)
  // Print the number of ways of making change for 'n' units using coins having the values given by 'c'
  var ways = getWays(n, m, c)
  console.log(ways)
}
