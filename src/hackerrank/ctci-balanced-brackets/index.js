import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let result = 'YES';
    const expression = readLine();
    const s = new Stack();

    for (let i = 0; i < expression.length; i++) {
      const bracket = expression[i];
      const size = s._size;
      if (s._size) {
        switch (bracket) {
          case '}':
            s._storage[size] === '{' ? s.pop() : (result = 'NO');
            break;
          case ']':
            s._storage[size] === '[' ? s.pop() : (result = 'NO');
            break;
          case ')':
            s._storage[size] === '(' ? s.pop() : (result = 'NO');
            break;
          default:
            s.push(bracket);
        }
      } else {
        s.push(bracket);
      }
    }

    if (s._size) {
      result = 'NO';
    }

    process.stdout.write('' + result + '\n');
  }
}

class Stack {
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  push(data) {
    this._storage[++this._size] = data;
  }

  pop() {
    let deletedData;

    if (this._size) {
      deletedData = this._storage[this._size];

      delete this._storage[this._size];
      this._size--;

      return deletedData;
    }
  }
}
