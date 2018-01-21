import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function powerSum(X, N, num) {
  const value = X - Math.pow(num, N);

  if (value < 0) {
    return 0;
  } else if (value === 0) {
    return 1;
  } else {
    return powerSum(value, N, num + 1) + powerSum(X, N, num + 1);
  }
}

function main() {
  const X = parseInt(readLine());
  const N = parseInt(readLine());
  const result = powerSum(X, N, 1);
  process.stdout.write('' + result + '\n');
}
