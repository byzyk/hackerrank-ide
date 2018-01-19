import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const noOfCurrentAgents = parseInt(readLine());
  let n = readLine();
  readLine();
  const callsTimes = [];
  while (n--) {
    callsTimes.push(readLine().split(' '));
  }

  let agentsToHire = 0;
  const [START, END] = [callsTimes[0][0], callsTimes[callsTimes.length - 1][1]];
  const wholeTime = END - START;
  if (wholeTime > 0) {
    let arr = new Array(wholeTime).fill(0);
    const diffs = [];

    callsTimes.forEach(time => {
      const start = time[0] - START;
      const end = time[1] - time[0];
      for (let i = start; i < end; i++) {
        arr[i] += 1;
      }
    });

    arr = arr.filter(item => !isNaN(item));
    if (arr.length) {
      const peek = Math.max(...arr);
      if (noOfCurrentAgents < peek) {
        agentsToHire = peek - noOfCurrentAgents;
      }
    }
  }

  console.log(agentsToHire);
}
