import logger from '../logger/log.js'
import { AppError } from '../../utils/AppError.js'
import appenv from '../../config/index.js'

import transporter from './connection.js'

/**
 * Sends an email using Nodemailer.
 * @param {object} options - Email options (directly passed to Nodemailer).
 * @throws {Error} If required fields are missing.
 * @returns {Promise<void>}
 */
export const sendEmail = async (options) => {
  const { to, subject, html } = options

  if (!to || !subject || !html) {
    throw new AppError('Missing required email fields: to, subject, or html.')
  }

  try {
    const mailDetails = {
      from: appenv.MAIL.FROM,
      ...options,
    }

    const info = await transporter.sendMail(mailDetails)
    logger.info(`Email sent: ${info.messageId}`)
  } catch (error) {
    logger.error(`Error sending email: ${error}`)
    throw new AppError('Failed to send email')
  }
}
