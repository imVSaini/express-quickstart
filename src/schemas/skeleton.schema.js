import { z } from 'zod'

export const skeletonSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address'),
  signature: z.string().optional(),
})
