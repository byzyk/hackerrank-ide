import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const n_temp = readLine().split(' ');
  const n = parseInt(n_temp[0]);
  const k = parseInt(n_temp[1]);
  let a = readLine().split(' ');
  a = a.map(Number);

  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr[(i + n - k) % n] = a[i];
  }

  process.stdout.write('' + newArr.join(' ') + '\n');
}
