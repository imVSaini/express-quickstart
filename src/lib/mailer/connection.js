import nodemailer from 'nodemailer'

import logger from '../logger/log.js'
import mailConfig from '../../config/mail.js'
import appenv from '../../config/index.js'

const transporter = nodemailer.createTransport(mailConfig[appenv.APP.NODE_ENV])

transporter.verify((error, success) => {
  if (error) {
    logger.error('Error connecting to SMTP server:', error)
  } else {
    logger.info('👻 SMTP server is ready', success)
  }
})

export default transporter
