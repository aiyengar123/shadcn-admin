import { cn } from '@/lib/utils'

export function SophrisLogo({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src='/logos/sophris-logo.png'
      alt='Mirror'
      className={cn('bg-black object-contain', className)}
      {...props}
    />
  )
}
