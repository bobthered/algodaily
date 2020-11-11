class Hashmap {
  constructor() {
    this._storage = [];
  }

  get(key) {
    const i = this.hashStr(key);

    if (!this._storage[i]) return undefined;

    for (let keyVal of this._storage[i]) {
      if (keyVal[0] === key) return keyVal[1];
    }
  }

  hashStr(str) {
    return str.split('').reduce((a, c) => a + c.charCodeAt(0));
  }

  set(key, val) {
    const i = this.hashStr(key);

    if (!this._storage[i]) this._storage[i] = [];

    this._storage[i].push([key, val]);
  }
}

module.exports = Hashmap;
