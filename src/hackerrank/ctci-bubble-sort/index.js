import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const n = parseInt(readLine());
  let a = readLine().split(' ');
  a = a.map(Number);
  let swaps = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        swaps++;
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }

  const result = `Array is sorted in ${swaps} swaps.
First Element: ${a[0]}
Last Element: ${a[n - 1]}`;

  process.stdout.write('' + result + '\n');
}
