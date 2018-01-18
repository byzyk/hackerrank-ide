import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function solve(m, arr) {
  let res = [];

  const pricesSet = new Set(arr);
  const prices = [...pricesSet];
  prices.sort((a, b) => a - b);

  let min = 0;
  let max = prices.length - 1;

  while (true) {
    const sum = prices[min] + prices[max];
    if (sum > m) {
      max--;
    } else if (sum < m) {
      min++;
    } else {
      break;
    }
  }

  if (min === max) {
    for (let i = 0; i < arr.length; i++) {
      if (res.length < 2) {
        if (arr[i] === prices[min]) res.push(i);
      } else {
        break;
      }
    }
  } else {
    res.push(arr.indexOf(prices[min]));
    res.push(arr.indexOf(prices[max]));
  }

  res.sort((a, b) => a - b);
  res = res.map(item => item + 1);

  return res.join(' ');
}

function main() {
  let t = parseInt(readLine());

  let result = [];

  while (t--) {
    const m = parseInt(readLine());
    const n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);

    result.push(solve(m, arr));
  }

  console.log(result.join('\n'));
}
