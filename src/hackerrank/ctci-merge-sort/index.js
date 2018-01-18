import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function countInversions(arr) {
  let inversions = 0;
  const merge = (left, right) => {
    let result = [];
    while (left && left.length && right && right.length) {
      if (left[0] > right[0]) {
        result.push(right.shift());
        inversions += left.length;
      } else {
        result.push(left.shift());
      }
    }
    result = [...result, ...left, ...right];
    return result;
  };

  const mergeSort = arr => {
    const n = arr.length;
    const half = Math.round(n / 2);

    if (n === 1) {
      return arr;
    }

    const left = mergeSort(arr.slice(0, half));
    const right = mergeSort(arr.slice(half));

    return merge(left, right);
  };

  mergeSort(arr);
  return inversions++;
}

function main() {
  const t = parseInt(readLine());
  for (let a0 = 0; a0 < t; a0++) {
    const n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    process.stdout.write('' + countInversions(arr) + '\n');
  }
}
