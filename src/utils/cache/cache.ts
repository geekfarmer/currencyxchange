import * as NodeCache from "node-cache";

class CacheService {
  cache: NodeCache;

  constructor(ttl: number) {
    this.cache = new NodeCache({
      stdTTL: ttl,
      checkperiod: ttl * 0.2,
      useClones: false,
    });
  }

  get(key: string, fetchData: Function) {
    const value = this.cache.get(key);

    if (value) {
      console.log(`Fetching ${key} data from cache...`);
      return Promise.resolve(value);
    }

    if (!fetchData) {
      return undefined;
    }

    return fetchData().then((result: any) => {
      console.log(`Fetching ${key} data from API...`);
      this.cache.set(key, result);
      return result;
    });
  }

  del(keys: string[]) {
    this.cache.del(keys);
  }

  flush() {
    this.cache.flushAll();
  }
}

export default CacheService;
