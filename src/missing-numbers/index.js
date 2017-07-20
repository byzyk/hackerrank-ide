import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function count(arr, i, h) {
  const el = arr[i];
  let num = 0;

  if (h.has(el)) {
    num = h.get(el) + 1;
  } else {
    num = 1;
  }

  h.set(el, num);
}

function main() {
  let n = [];
  let ar = [];
  n[0] = parseInt(readLine());
  ar[0] = readLine().split(' ');
  ar[0] = ar[0].map(Number);
  n[1] = parseInt(readLine());
  ar[1] = readLine().split(' ');
  ar[1] = ar[1].map(Number);

  let res = new Set();
  let hash = [new Map(), new Map()];
  let j = 2;

  while (j--) {
    for (let i = 0; i < n[j]; i++) {
      count(ar[j], i, hash[j]);
    }
  }

  hash[1].forEach((value, key) => {
    if (hash[0].get(key) < value || !hash[0].has(key)) {
      res.add(key);
    }
  });

  const result = [...res].sort((a, b) => a - b);
  console.log(result.join(' '));
}
