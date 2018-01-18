import { readLine } from 'lib/process.stdin.js';
process.stdin.on('end', main);
/////////////// ignore above this line ////////////////////

function main() {
  const contacts = new Trie();

  let n = parseInt(readLine());
  while (n--) {
    const i = readLine().split(' ');
    const operation = i[0];
    const value = i[1];

    if (operation === 'add') {
      contacts.add(value);
    }
    if (operation === 'find') {
      console.log(contacts.getCount(value));
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.count = 1;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
    this.count = 0;
  }

  add(name) {
    this._add(this.root, name);
  }

  _add(node, word) {
    if (!node || !word) {
      return null;
    }
    const letter = word[0];
    let child = node.children[letter];
    if (!child) {
      child = new Node(letter);
      node.children[letter] = child;
    } else {
      child.count++;
    }
    const rest = word.substring(1);
    this._add(child, rest);
  }

  find(word) {
    this.count = 0;
    return this._find(this.root, word);
  }

  _find(node, word) {
    if (!node || !word) {
      return false;
    }
    const letter = word[0];
    const child = node.children[letter];
    if (child) {
      if (!this.count || child.count < this.count) {
        this.count = child.count;
      }
      const rest = word.substring(1);
      if (!rest) {
        return true;
      } else {
        return this._find(child, rest);
      }
    } else {
      return false;
    }
  }

  getCount(word) {
    const isFound = this.find(word);

    if (!isFound) {
      return 0;
    } else {
      return this.count;
    }
  }
}
