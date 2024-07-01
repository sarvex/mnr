const env = process.env

export const PORT = env.PORT ?? '8080'
export const HOST = env.HOST ?? '0.0.0.0'
export const URL = `http://${HOST}:${PORT}`

export const MONGO = env.MONGO ?? 'mongodb://localhost:27017'
export const DATABASE = env.DATABASE ?? 'local'

export default {
  PORT,
  HOST,
  URL,
  MONGO,
  DATABASE,
}
