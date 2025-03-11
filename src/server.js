import http from 'node:http'

import { config } from 'dotenv'

import app from './app.js'
import logger from './lib/logger/log.js'
import { AppRoot } from './utils/AppRoot.js'
import appenv from './config/index.js'
config({ path: AppRoot.pathway('.env') })

function startServer() {
  try {
    const server = http.createServer(app)
    server.listen(appenv.APP.PORT, () => {
      const addr = server.address()
      const host = addr.address === '::' ? 'localhost' : addr.address
      const portInfo = addr.port

      const baseUrl =
        appenv.APP.NODE_ENV === 'production'
          ? `${appenv.APP.API_ENDPOINT} (production)`
          : `http://${host}:${portInfo}${appenv.APP.API_ENDPOINT}`

      logger.info(`🚀 Server is running at ${baseUrl}`)
    })
  } catch (error) {
    logger.error(`❌ Server failed to start :: ${error}`)
    process.exit(1)
  }
}

startServer()
