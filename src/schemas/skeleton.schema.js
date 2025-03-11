import { z } from 'zod'

export const getSkeletonSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const createSkeletonSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address'),
  signature: z.string().optional(),
})

export const modifySkeletonSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address').optional(),
  signature: z.string().optional(),
})
