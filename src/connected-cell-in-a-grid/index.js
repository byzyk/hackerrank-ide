import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const n = parseInt(readLine());
  const m = parseInt(readLine());
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    matrix.push(arr);
  }

  let max = 0;

  function count(x, y) {
    if (x >= 0 && x < n && y >= 0 && y < m && matrix[x][y]) {
      matrix[x][y] = 0;
      return (
        1 +
        count(x - 1, y - 1) +
        count(x - 1, y) +
        count(x - 1, y + 1) +
        count(x, y - 1) +
        count(x, y + 1) +
        count(x + 1, y - 1) +
        count(x + 1, y) +
        count(x + 1, y + 1)
      );
    }
    return 0;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 1) {
        max = Math.max(max, count(i, j));
      }
    }
  }

  console.log(max);
}
