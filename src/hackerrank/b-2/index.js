import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  let n = readLine();
  const arr = [];
  while (n--) {
    arr.push(readLine());
  }

  const TOKEN = -128;
  const TOKEN_CHECK = 127;
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const [curr, prev] = [arr[i], arr[i - 1]];
    const res = curr - prev;
    if (res < -TOKEN_CHECK || res > TOKEN_CHECK) {
      result.push(TOKEN);
    }
    result.push(res);
  }

  console.log(result.join('\n'));
}
