import asyncHandler from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { AppError } from '../utils/AppError.js'
import { skeletonAPI } from '../datasources/skeleton.js'

const getSkeleton = asyncHandler(async (req, res) => {
  const { email } = req.body
  const result = await skeletonAPI.findOne({ email })

  if (!result) {
    throw new AppError('Skeleton record not found', 404)
  }

  return ApiResponse.success(res, result, 'Record fetch successful', 200)
})

const createSkeleton = asyncHandler(async (req, res) => {
  const data = req.body
  const result = await skeletonAPI.create(data)

  if (!result) {
    throw new AppError('Skeleton record not found', 404)
  }

  return ApiResponse.success(res, result, 'Record created successful', 201)
})

const updateSkeleton = asyncHandler(async (req, res) => {
  const { name = null, email, signature = null } = req.body
  const result = await skeletonAPI.update(req.params.id, {
    name,
    email,
    signature,
  })

  if (!result) {
    throw new AppError('Skeleton record not found', 404)
  }

  return ApiResponse.success(res, result, 'Record updated successful', 200)
})

export { getSkeleton, createSkeleton, updateSkeleton }
