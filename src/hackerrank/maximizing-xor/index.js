import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function maximizingXor(l, r) {
  let max = 0;
  for (let i = l; i < r; i++) {
    for (let j = r; j > l; j--) {
      const res = i ^ j;
      if (res > max) {
        max = res;
      }
    }
  }
  return max;
}

function main() {
  var l = parseInt(readLine());
  var r = parseInt(readLine());
  var result = maximizingXor(l, r);
  process.stdout.write('' + result + '\n');
}
