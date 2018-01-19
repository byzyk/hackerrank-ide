import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const n = parseInt(readLine());
  let a = readLine().split(' ');
  a = a.map(Number);
  let result = null;

  a.forEach(i => {
    result ^= i;
  });

  process.stdout.write('' + result + '\n');
}
