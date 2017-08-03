import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function getFebDays(year) {
  let days = 28

  if (year < 1918) {
    if (year % 4 === 0) {
      days = 29
    }
  } else if (year === 1918) {
    days = 15
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      days = 29
    }
  }

  return days
}

function solve(year) {
  // Complete this function
  let res = ''

  let day = 0
  let month = 0

  const THE_DAY = 256
  const DAYS = [
    31,
    getFebDays(year), // helper based on year
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]

  DAYS.map((item, i) => {
    let sum = day + item
    if (sum < THE_DAY) {
      day = sum
      month++
    }
  })

  day = THE_DAY - day
  month++

  if (month.toString().length === 1) month = `0${month}`

  res = `${day}.${month}.${year}`

  return res
}

function main() {
  var year = parseInt(readLine())
  var result = solve(year)
  process.stdout.write('' + result + '\n')
}
