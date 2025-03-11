import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import { config } from 'dotenv'

import appenv from './config/index.js'
import logger from './lib/logger/log.js'
import router from './routes.js'
import formatError from './middlewares/formatError.js'
import { AppRoot } from './utils/AppRoot.js'
config({ path: AppRoot.pathway('.env') })

const corsOptions = {
  origin: '<insert uri of front-end domain>',
  credentials: true,
}

const app = express()

// app.use(limiter)
app.use(morgan('combined', { stream: logger.stream }))
app.use(express.urlencoded({ extended: false, limit: '50kb' }))
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.json({ limit: '50kb' }))
app.use(`${appenv.APP.API_ENDPOINT}`, router)
app.use(formatError)

export default app
