import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  let t = parseInt(readLine());

  while (t--) {
    const temp = readLine().split(' ');
    const n = parseInt(temp[0]);
    const m = parseInt(temp[1]);
    let matrix = [];
    let start = [];
    for (let i = 0; i < n; i++) {
      let arr = readLine().split('');
      if (arr.includes('M')) {
        start = [arr.indexOf('M'), i];
      }
      matrix.push(arr);
    }
    const k = parseInt(readLine());

    let path = '';

    function step(x, y) {
      if (
        x >= 0 &&
        x < n &&
        y >= 0 &&
        y < m &&
        typeof matrix[x][y] === 'string'
      ) {
        if (
          matrix[x][y] === '.' ||
          matrix[x][y] === 'M' ||
          matrix[x][y] === '*'
        ) {
          matrix[x][y] = 0;
          const str =
            `(${x},${y})` +
            step(x + 1, y) +
            step(x - 1, y) +
            step(x, y + 1) +
            step(x, y - 1);
          if (matrix[x][y] === '*') return str;
        }
      }
      return '';
    }

    path = path.length || step(start[1], start[0]);

    console.log(path);
  }
}
