import express from 'express'

const router = express.Router()

import hello from './controllers/hello.controller.js'
import skeletonRoutes from './routes/skeleton.route.js'

router.get('/hello', hello)
router.use('/quickstart', skeletonRoutes)

export default router
