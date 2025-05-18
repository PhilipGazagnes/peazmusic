import { redis } from '~/utils/redis'

export const useCache = () => {
  const getCachedData = async (key: string) => {
    try {
      const cached = await redis.get(key)
      return cached || null
    } catch (error) {
      console.error('Redis error:', error)
      return null
    }
  }

  const setCachedData = async (key: string, data: any, ttl: number = 3600) => {
    try {
      await redis.set(key, data, { ex: ttl })
    } catch (error) {
      console.error('Redis error:', error)
    }
  }

  return {
    getCachedData,
    setCachedData
  }
}