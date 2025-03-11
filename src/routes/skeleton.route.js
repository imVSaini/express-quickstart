import express from 'express'

import validate from '../middlewares/validate.js'
import {
  createSkeleton,
  getSkeleton,
  updateSkeleton,
} from '../controllers/skeleton.controller.js'
import {
  createSkeletonSchema,
  getSkeletonSchema,
  modifySkeletonSchema,
} from '../schemas/skeleton.schema.js'

const skeletonRoutes = express.Router()

skeletonRoutes.get('/', validate(getSkeletonSchema), getSkeleton)
skeletonRoutes.post('/', validate(createSkeletonSchema), createSkeleton)
skeletonRoutes.put('/:id', validate(modifySkeletonSchema), updateSkeleton)
// skeletonRoutes.delete('/:id', skeleton)

export default skeletonRoutes
