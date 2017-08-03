import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function getMoneySpent(keyboards, drives, s) {
  // Complete this function
  let res = -1
  let possibleSpends = []

  keyboards.forEach(k => {
    drives.forEach(d => {
      possibleSpends.push(k + d)
    })
  })

  possibleSpends.forEach(item => {
    if (item <= s && item > res) res = item
  })

  return res
}

function main() {
  var s_temp = readLine().split(' ')
  var s = parseInt(s_temp[0])
  var n = parseInt(s_temp[1])
  var m = parseInt(s_temp[2])
  let keyboards = readLine().split(' ')
  keyboards = keyboards.map(Number)
  let drives = readLine().split(' ')
  drives = drives.map(Number)
  //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
  var moneySpent = getMoneySpent(keyboards, drives, s)
  process.stdout.write('' + moneySpent + '\n')
}
