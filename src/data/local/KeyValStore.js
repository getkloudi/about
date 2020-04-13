class KeyValStore {
  get(key) {
    return window.localStorage.getItem(key) || undefined;
  }

  set(key, val) {
    window.localStorage.setItem(key, val);
  }

  remove(key) {
    if (this.get(key)) window.localStorage.removeItem(key, val);
  }

  clear() {
    window.localStorage.clear();
  }
}

export default new KeyValStore();
