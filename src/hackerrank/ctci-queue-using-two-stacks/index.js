import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const t = parseInt(readLine());
  const q = new Queue();
  for (let i = 0; i < t; i++) {
    const [type, value] = readLine().split(' ');
    switch (type) {
      case '1':
        q.enqueue(value);
        break;
      case '2':
        q.dequeue();
        break;
      case '3':
        console.log(q._storage[q._oldestIndex]);
        break;
    }
  }
}

class Queue {
  constructor() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
  }

  size() {
    return this._newestIndex - this._oldestIndex;
  }

  enqueue(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
  }

  dequeue() {
    const { _oldestIndex, _newestIndex } = this;
    let deletedData;

    if (_oldestIndex !== _newestIndex) {
      deletedData = this._storage[_oldestIndex];
      delete this._storage[_oldestIndex];
      this._oldestIndex++;

      return deletedData;
    }
  }
}
