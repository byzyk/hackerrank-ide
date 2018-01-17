import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const n = parseInt(readLine());
  let a = [];
  for (let a_i = 0; a_i < n; a_i++) {
    a[a_i] = parseInt(readLine());
    const len = a.length;
    a = a.sort((a, b) => a - b);
    if (len % 2 === 0) {
      const m = len / 2;
      console.log(num((a[m - 1] + a[m]) / 2));
    } else if (len === 1) {
      console.log(num(a[0]));
    } else {
      console.log(num(a[Math.floor(len / 2)]));
    }
  }
}

function num(n) {
  return n.toFixed(1);
}
