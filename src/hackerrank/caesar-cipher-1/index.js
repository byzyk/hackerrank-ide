import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

const alpha = 26;
const [min, max, MIN, MAX] = [97, 122, 65, 90];

function caesarCipher(s, k) {
  const str = s.split('').map(char => {
    const isAlpha = char.match(/[a-z,A-Z]/);
    if (isAlpha) {
      const codeChar = char.codePointAt(0);
      const codeA = char === char.toUpperCase() ? MIN : min;
      const encryptedCode = codeA + (codeChar - codeA + k) % alpha;
      return String.fromCharCode(encryptedCode);
    } else {
      return char;
    }
  });

  return str.join('');
}

function main() {
  const n = parseInt(readLine());
  const s = readLine();
  const k = parseInt(readLine());
  const result = caesarCipher(s, k);
  process.stdout.write('' + result + '\n');
}
