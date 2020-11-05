import NodeCache from 'node-cache';

const cache = new NodeCache();

export const get = (key: string) => {
  return cache.get(key)
}

export const set = (key: string, value: any) => {
  return cache.set(key, value, 24 * 60 * 60)
}