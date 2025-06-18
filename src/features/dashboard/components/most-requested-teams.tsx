import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function MostRequestedTeams() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarFallback className='bg-green-100 text-green-600'>
            FT
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Founding Team</p>
          </div>
          <div className='font-medium'>419 requests</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarFallback className='bg-orange-100 text-orange-600'>
            IN
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Interns</p>
          </div>
          <div className='font-medium'>19 requests</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarFallback className='bg-blue-100 text-blue-600'>
            SC
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Subcontractors</p>
          </div>
          <div className='font-medium'>10 requests</div>
        </div>
      </div>
    </div>
  )
}
