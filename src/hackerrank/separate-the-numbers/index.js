import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function separateNumbers(s) {
  let result = 'NO';
  let length = s.length;

  for (let i = 1; i < (length + 1) / 2; i++) {
    const first = s.substr(0, i);
    let test = first;
    let j = parseInt(first);
    while (test.length < length) {
      j++;
      test += j.toString();
    }
    if (test === s) {
      result = `YES ${first}`;
    }
  }

  return result;
}

function main() {
  const q = parseInt(readLine());
  for (let a0 = 0; a0 < q; a0++) {
    console.log(separateNumbers(readLine()));
  }
}
