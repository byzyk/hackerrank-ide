import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function alternatingCharacters(s) {
  const arr = s.split('');
  let deletions = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      deletions++;
    }
  }

  return deletions;
}

function main() {
  const q = parseInt(readLine());
  for (let a0 = 0; a0 < q; a0++) {
    const s = readLine();
    const result = alternatingCharacters(s);
    process.stdout.write('' + result + '\n');
  }
}
