import asyncHandler from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const hello = asyncHandler(async (req, res) => {
  return ApiResponse.success(res, null, 'Hello, World!', 200)
})

export default hello
