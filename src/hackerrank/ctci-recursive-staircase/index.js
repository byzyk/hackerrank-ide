import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

let cache = new Set();

function count(n) {
  if (cache[n]) return cache[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  cache[n] = count(n - 1) + count(n - 2) + count(n - 3);
  return cache[n];
}

function main() {
  const s = parseInt(readLine());
  for (let a0 = 0; a0 < s; a0++) {
    const n = parseInt(readLine());
    console.log(count(n, 0));
  }
}
