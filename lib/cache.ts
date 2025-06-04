interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  key?: string; // Custom cache key
}

class Cache {
  private static instance: Cache;
  private cache: Map<string, CacheEntry<any>>;
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

  private constructor() {
    this.cache = new Map();
  }

  public static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }

  private generateKey(key: string, params?: any): string {
    if (params) {
      return `${key}:${JSON.stringify(params)}`;
    }
    return key;
  }

  public async get<T>(
    key: string,
    fetchFn: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<T> {
    const cacheKey = this.generateKey(options.key || key, options);
    const entry = this.cache.get(cacheKey);
    const now = Date.now();

    if (entry && now - entry.timestamp < (options.ttl || this.DEFAULT_TTL)) {
      return entry.data;
    }

    const data = await fetchFn();
    this.cache.set(cacheKey, { data, timestamp: now });
    return data;
  }

  public set<T>(key: string, data: T, options: CacheOptions = {}): void {
    const cacheKey = this.generateKey(options.key || key, options);
    this.cache.set(cacheKey, { data, timestamp: Date.now() });
  }

  public invalidate(key: string, params?: any): void {
    const cacheKey = this.generateKey(key, params);
    this.cache.delete(cacheKey);
  }

  public clear(): void {
    this.cache.clear();
  }
}

export const cache = Cache.getInstance();

// Example usage:
/*
import { cache } from '@/lib/cache';

// Fetch user profile with caching
const getUserProfile = async (userId: string) => {
  return cache.get(
    `userProfile:${userId}`,
    async () => {
      const userDoc = await getDoc(doc(db, 'users', userId));
      return userDoc.data();
    },
    { ttl: 60 * 1000 } // 1 minute cache
  );
};
*/ 