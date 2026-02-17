// Problem Description – Async Cache with Time-to-Live (TTL)

// You are required to create an asynchronous cache utility that exposes a get(key, fetcher) method.
// If the requested key already exists in the cache, the cached value should be returned immediately.
// If the key does not exist, the fetcher function should be executed to retrieve the value,
// store it in the cache, and automatically remove the entry after a fixed Time-to-Live (TTL) of 5 seconds.
class AsyncCache {
  constructor(ttl = 5000) {
    this.timer = ttl;
    this.cache = {};
  }

  async get(key, fetcher) {
    if (key in this.cache) {
      return this.cache[key];
    } else {
      const value = await fetcher();
      this.cache[key] = value;
      setTimeout(() => {
        delete this.cache[key];
      }, this.timer);
      return value;
    }
  }
}

module.exports = AsyncCache;
