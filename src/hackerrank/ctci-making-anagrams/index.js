import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  let a = readLine().split('');
  let b = readLine().split('');
  const freq = {};
  let result = 0;

  a.forEach(char => {
    freq[char] = (freq[char] || 0) + 1;
  });

  b.forEach(char => {
    freq[char] = (freq[char] || 0) - 1;
  });

  result = Object.keys(freq)
    .map(key => Math.abs(freq[key]))
    .reduce((x, y) => x + y);

  process.stdout.write('' + result + '\n');
}
