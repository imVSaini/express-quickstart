import { config } from 'dotenv'

import appenv from '../config/index.js'
import { AppRoot } from '../utils/AppRoot.js'
config({ path: AppRoot.pathway('.env') })

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: appenv.DB.HOST,
      port: appenv.DB.PORT,
      user: appenv.DB.USER,
      password: appenv.DB.PASSWORD,
      database: appenv.DB.NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: AppRoot.pathway('src/database/migrations'),
    },
    seeds: {
      directory: AppRoot.pathway('src/database/seeds'),
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: appenv.DB.HOST,
      port: appenv.DB.PORT,
      user: appenv.DB.USER,
      password: appenv.DB.PASSWORD,
      database: appenv.DB.NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: AppRoot.pathway('src/database/migrations'),
    },
    seeds: {
      directory: AppRoot.pathway('src/database/seeds'),
    },
  },
}
