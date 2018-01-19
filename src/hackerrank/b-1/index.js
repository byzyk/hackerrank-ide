import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const [a, b, c, d] = [readLine(), readLine(), readLine(), readLine()];
  let result = 0;
  const edges = [a, b, c, d];

  if (edges.every(val => !isNaN(val)) && edges.every(val => val > 0)) {
    if (edges.every(val => val === edges[0])) {
      result = 2;
    } else if (edges[0] === edges[2] && edges[1] === edges[3]) {
      result = 1;
    }
  }

  console.log(result);
}
