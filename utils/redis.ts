import { Redis } from '@upstash/redis'

// Create a function that returns a new Redis client
export const createRedisClient = () => {
  return new Redis({
    url: 'https://elegant-lemming-20997.upstash.io',
    token: 'AVIFAAIjcDE4ZTUxMjk2ZGQ3MWM0MTZiOWEzNmJkMDllMDcyNTA0N3AxMA'
  })
}