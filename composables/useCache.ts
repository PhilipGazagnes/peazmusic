import { createRedisClient } from '~/utils/redis'

export const useCache = () => {
  const getCachedData = async (key: string) => {
    try {
      const redis = createRedisClient()
      const cached = await redis.get(key)
      return cached || null
    } catch (error) {
      console.error('Redis error:', error)
      return null
    }
  }

  const setCachedData = async (key: string, data: any, ttl: number = 3600) => {
    try {
      const redis = createRedisClient()
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