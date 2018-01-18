import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const contacts = new Contacts();
  const n = parseInt(readLine());
  for (let a0 = 0; a0 < n; a0++) {
    const op_temp = readLine().split(' ');
    const op = op_temp[0];
    const value = op_temp[1];

    switch (op) {
      case 'add':
        contacts.add(value);
        break;
      case 'find':
        console.log(contacts.getFoundNum(value));
        break;
    }
  }
}

class Contacts {
  constructor() {
    this.list = [];
  }

  add(name) {
    this.list = [name, ...this.list];
  }

  find(term) {
    return this.list.filter(name => name.indexOf(term) !== -1);
  }

  getFoundNum(term) {
    const res = this.find(term);
    return res.length;
  }
}
