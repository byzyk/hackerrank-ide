import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const m_temp = readLine().split(' ');
  const m = parseInt(m_temp[0]);
  const n = parseInt(m_temp[1]);
  const magazine = readLine().split(' ');
  const ransom = readLine().split(' ');
  let result = 'Yes';

  const hash = {};

  magazine.forEach(w => {
    hash[w] = (hash[w] || 0) + 1;
  });

  ransom.forEach(w => {
    hash[w] = (hash[w] || 0) - 1;
  });

  for (let word in hash) {
    if (hash[word] < 0) {
      result = 'No';
    }
  }

  process.stdout.write('' + result + '\n');
}
