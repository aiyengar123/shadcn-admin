import { cn } from '@/lib/utils'

export function SophrisLogo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('h-8 w-8 rounded bg-blue-600', className)} {...props} />
  )
}
