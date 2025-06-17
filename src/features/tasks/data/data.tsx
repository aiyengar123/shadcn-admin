import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconCircle,
  IconCircleCheck,
  IconCircleX,
  IconBrain,
  IconMessageCircle,
  IconCode,
  IconFileText,
  IconSearch,
  IconAnalyze,
} from '@tabler/icons-react'

export const activityTypes = [
  {
    value: 'analysis',
    label: 'Analysis',
    icon: IconAnalyze,
  },
  {
    value: 'coding',
    label: 'Coding',
    icon: IconCode,
  },
  {
    value: 'research',
    label: 'Research',
    icon: IconSearch,
  },
  {
    value: 'writing',
    label: 'Writing',
    icon: IconFileText,
  },
  {
    value: 'conversation',
    label: 'Conversation',
    icon: IconMessageCircle,
  },
  {
    value: 'thinking',
    label: 'Deep Thinking',
    icon: IconBrain,
  },
]

// Keep labels for backward compatibility
export const labels = activityTypes.map(({ value, label }) => ({
  value,
  label,
}))

export const statuses = [
  {
    value: 'queued',
    label: 'Queued',
    icon: IconCircle,
  },
  {
    value: 'processing',
    label: 'Processing',
    icon: IconCircle,
  },
  {
    value: 'completed',
    label: 'Completed',
    icon: IconCircleCheck,
  },
  {
    value: 'failed',
    label: 'Failed',
    icon: IconCircleX,
  },
]

export const urgencyLevels = [
  {
    label: 'Low',
    value: 'low',
    icon: IconArrowDown,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: IconArrowRight,
  },
  {
    label: 'High',
    value: 'high',
    icon: IconArrowUp,
  },
]

// Keep priorities for backward compatibility
export const priorities = urgencyLevels
