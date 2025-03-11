/* eslint-disable security/detect-object-injection */
import knex from 'knex'
import { config } from 'dotenv'

import appenv from '../config/index.js'
import dbConfig from '../config/database.js'
import logger from '../lib/logger/log.js'
import { AppRoot } from '../utils/AppRoot.js'
config({ path: AppRoot.pathway('.env') })

const env = appenv.APP.NODE_ENV || 'production'

let knexInstance

try {
  knexInstance = knex(dbConfig[env])
} catch (error) {
  logger.error('Failed to establish database connection:', error)
  process.exit(1)
}

export default knexInstance
