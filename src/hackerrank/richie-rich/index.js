import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function highestValuePalindrome(s, n, changesLeft) {
  const str = s.split('');
  const HALF = Math.floor(n / 2);
  let result = '';
  let indexStart = 0;
  let indexEnd = n - 1;
  let middle = null;
  let requiredChanges = 0;

  while (indexStart <= indexEnd) {
    if (indexStart === indexEnd) {
      middle = str[indexStart];
    }

    if (str[indexStart] !== str[indexEnd]) {
      requiredChanges++;
    }

    indexStart++;
    indexEnd--;
  }

  if (requiredChanges > changesLeft) {
    result = '-1';
  } else {
    for (let i = 0; i < HALF; i++) {
      if (changesLeft) {
        const start = i;
        const end = n - i - 1;

        if (str[start] === str[end]) {
          if (
            str[start] !== '9' &&
            changesLeft >= 2 &&
            changesLeft - 2 >= requiredChanges
          ) {
            str[start] = '9';
            str[end] = '9';
            changesLeft -= 2;
          }
        } else {
          if (str[start] === '9') {
            str[end] = '9';
            changesLeft -= 1;
          } else if (str[end] === '9') {
            str[start] = '9';
            changesLeft -= 1;
          } else if (changesLeft >= 2) {
            str[start] = '9';
            str[end] = '9';
            changesLeft -= 2;
          } else if (+str[start] > +str[end]) {
            str[end] = str[start];
            changesLeft -= 1;
          } else if (+str[start] < +str[end]) {
            str[start] = str[end];
            changesLeft -= 1;
          }
        }
      } else {
        break;
      }
    }

    if (typeof middle === 'string' && changesLeft) {
      str[n !== 1 ? HALF : 0] = '9';
    }

    result = str.join('');
  }

  return result;
}

function main() {
  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const s = readLine();

  console.log(highestValuePalindrome(s, n, k));
}
