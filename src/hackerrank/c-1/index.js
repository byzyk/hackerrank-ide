import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function collision(speed, pos) {
  let result = 0;
  const length = speed.length;
  const distance = [];

  for (let i = 0; i < length; i++) {
    distance[i] = i + speed[i] * length;
  }

  const pickedItem = distance[pos];

  distance.map((item, i) => {
    if ((i < pos && item >= pickedItem) || (i > pos && item <= pickedItem)) {
      result++;
    }
  });

  return result;
}

function main() {
  let n = readLine();
  const speed = [];
  while (n--) {
    speed.push(parseInt(readLine()));
  }
  const pos = parseInt(readLine());
  console.log(collision(speed, pos));
}
