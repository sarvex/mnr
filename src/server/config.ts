const env = process.env

export const PORT = env.PORT ?? '8080'
export const HOST = env.HOST ?? '0.0.0.0'
export const URL = `http://${HOST}:${PORT}`

export default {
  PORT,
  HOST,
  URL,
}
