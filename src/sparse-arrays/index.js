import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function solve(n, q, str, queries) {
  let res = []

  queries.forEach(query => {
    res.push(str.filter(item => item === query).length)
  })

  return res
}

function main() {
  const n = parseInt(readLine())
  let str = []
  for (let i = 0; i < n; i++) {
    str.push(readLine())
  }
  const q = parseInt(readLine())
  let query = []
  for (let i = 0; i < q; i++) {
    query.push(readLine())
  }
  const res = solve(n, q, str, query)
  console.log(res.join('\n'))
}
