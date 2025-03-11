import { config } from 'dotenv'

import appenv from '../config/index.js'
import { AppRoot } from '../utils/AppRoot.js'
config({ path: AppRoot.pathway('.env') })

export default {
  production: {
    host: appenv.MAIL.HOST,
    port: appenv.MAIL.PORT,
    auth: {
      user: appenv.MAIL.USERNAME,
      pass: appenv.MAIL.PASSWORD,
    },
    secure: false,
  },
  development: {
    host: appenv.MAIL.HOST,
    port: appenv.MAIL.PORT,
    auth: {
      user: appenv.MAIL.USERNAME,
      pass: appenv.MAIL.PASSWORD,
    },
    secure: false,
  },
}
