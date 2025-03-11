import { config } from 'dotenv'

import { AppRoot } from '../utils/AppRoot.js'
config({ path: AppRoot.pathway('.env') })

const requiredVariables = ['DB_HOST', 'DB_NAME']

requiredVariables.forEach((variable) => {
  // !process.env[variable]
  if (!Object.prototype.hasOwnProperty.call(process.env, variable)) {
    throw new Error(`Environment variable ${variable} is missing`)
  }
})

export default {
  APP: {
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: parseInt(process.env.PORT, 10) || 4000,
    API_ENDPOINT: process.env.API_ENDPOINT,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  },
  DB: {
    HOST: process.env.DB_HOST,
    PORT: parseInt(process.env.DB_PORT, 10) || 3306, //5432
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    FILENAME: process.env.DB_FILENAME,
  },
  MAIL: {
    HOST: process.env.SMTP_HOST,
    PORT: parseInt(process.env.SMTP_PORT, 10) || 587,
    USERNAME: process.env.SMTP_USERNAME,
    PASSWORD: process.env.SMTP_PASSWORD,
    FROM: process.env.SMTP_FROM_EMAIL || 'no-reply@devteam.com',
  },
}
