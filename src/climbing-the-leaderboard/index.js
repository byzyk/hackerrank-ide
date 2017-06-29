import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine())
  let scores = readLine().split(' ')
  scores = scores.map(Number)
  var m = parseInt(readLine())
  let alice = readLine().split(' ')
  alice = alice.map(Number)
  // your code goes here

  scores.reverse()

  let seen = {}
  scores = scores.filter(
    item => (seen.hasOwnProperty(item) ? false : (seen[item] = true))
  )
  const N = scores.length

  let rank = 0
  let currentIndex = 0
  for (let i = 0; i < m; i++) {
    const score = alice[i]

    for (let j = currentIndex; j < N; j++) {
      if (score < scores[j]) {
        rank = N + 1 - currentIndex
        console.log(rank)
        break
      } else {
        if (j + 1 === N) {
          console.log(1)
          break
        } else {
          currentIndex++
        }
      }
    }
  }
}
