import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function solve(grades) {
  // Complete this function
  const res = []
  grades.forEach(item => {
    const diff = item % 5
    if (diff >= 3 && item >= 38) {
      item += 5 - diff
    }
    res.push(item)
  })
  return res
}

function main() {
  var n = parseInt(readLine())
  var grades = []
  for (var grades_i = 0; grades_i < n; grades_i++) {
    grades[grades_i] = parseInt(readLine())
  }
  var result = solve(grades)
  console.log(result.join('\n'))
}
