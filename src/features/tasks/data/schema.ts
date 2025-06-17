import { z } from 'zod'

// Schema for digital clone activity
export const cloneActivitySchema = z.object({
  id: z.string(),
  cloneName: z.string(),
  userQuery: z.string(),
  status: z.string(),
  activityType: z.string(),
  urgency: z.string(),
})

export type CloneActivity = z.infer<typeof cloneActivitySchema>

// Keep legacy Task type for backward compatibility during transition
export const taskSchema = cloneActivitySchema
export type Task = CloneActivity
