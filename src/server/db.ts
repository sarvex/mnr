import { MongoClient } from 'mongodb'

import { MONGO, DATABASE } from './config'

let client

export const connect = async () => {
  if (client) {
    return client.db(DATABASE)
  }

  client = new MongoClient(MONGO)
  await client.connect()
  await client.db(DATABASE).command({ ping: 1 })
  console.log('Connected to Mongo')

  return client.db(DATABASE)
}

export const close = async () => {
  await client?.close()
}
