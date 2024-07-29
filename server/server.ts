import express from 'express'
import * as Path from 'node:path'

import fruits from './routes/fruits'
import vinyls from './routes/vinyls'

const server = express()

server.use(express.json())
// server.use(express.static(Path.join(__dirname, 'public')))

// Routes

server.use('/api/v1/fruits', fruits)
server.use('/api/v1/vinyls', vinyls)

// Production settings

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static('/app/dist/assets'))
  server.get('*', (req, res) => {
    res.sendFile('/app/dist/index.html')
  })
}

export default server
