import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function stockmax(prices) {
  const days = prices.length;
  let profit = 0;
  let max = 0;

  for (let i = days - 1; i >= 0; i--) {
    const price = prices[i];
    if (price > max) {
      max = price;
    }
    if (price < max) {
      profit += max - price;
    }
  }

  return profit;
}

function main() {
  let t = parseInt(readLine());
  while (t--) {
    const n = parseInt(readLine());
    let prices = readLine().split(' ');
    prices = prices.map(Number);
    var result = stockmax(prices);
    process.stdout.write('' + result + '\n');
  }
}
