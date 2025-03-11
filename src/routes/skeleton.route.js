import express from 'express'

import validate from '../middlewares/validate.js'
import {
  createSkeleton,
  getSkeleton,
  updateSkeleton,
} from '../controllers/skeleton.controller.js'
import { skeletonSchema } from '../schemas/skeleton.schema.js'

const skeletonRoutes = express.Router()

skeletonRoutes.get('/', validate(skeletonSchema), getSkeleton)
skeletonRoutes.post('/', validate(skeletonSchema), createSkeleton)
skeletonRoutes.put('/:id', validate(skeletonSchema), updateSkeleton)
// skeletonRoutes.delete('/:id', skeleton)

export default skeletonRoutes
