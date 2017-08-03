import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

function main() {
  var s_temp = readLine().split(' ')
  var s = parseInt(s_temp[0])
  var t = parseInt(s_temp[1])
  var a_temp = readLine().split(' ')
  var a = parseInt(a_temp[0])
  var b = parseInt(a_temp[1])
  var m_temp = readLine().split(' ')
  var m = parseInt(m_temp[0])
  var n = parseInt(m_temp[1])
  let apple = readLine().split(' ')
  apple = apple.map(Number)
  let orange = readLine().split(' ')
  orange = orange.map(Number)

  function checkInt(num) {
    return num <= t && num >= s
  }

  let res = [0, 0]

  apple.forEach(item => {
    if (checkInt(a + item)) res[0]++
  })

  orange.forEach(item => {
    if (checkInt(b + item)) res[1]++
  })

  console.log(res.join('\n'))
}
