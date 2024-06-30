import express from 'express'
import config from './config'

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('dist'))
server.use('/', (req, res) => {
  res.render('index', { initialContent: 'Loading...' })
})

server.listen(config.PORT, config.HOST, () => {
  console.info(`Express is listening at ${config.URL}`)
})
