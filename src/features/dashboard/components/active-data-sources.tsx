import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ActiveDataSources() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/logos/jira.png' alt='Jira' />
          <AvatarFallback className='bg-blue-100 text-blue-600'>
            JR
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Jira</p>
          </div>
          <div className='font-medium'>1,245 Tool Calls</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/logos/gmail.png' alt='Gmail' />
          <AvatarFallback className='bg-red-100 text-red-600'>
            GM
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Gmail</p>
          </div>
          <div className='font-medium'>956 Tool Calls</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/logos/slack.png' alt='Slack' />
          <AvatarFallback className='bg-purple-100 text-purple-600'>
            SL
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Slack</p>
          </div>
          <div className='font-medium'>743 Tool Calls</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/logos/notion.png' alt='Notion' />
          <AvatarFallback className='bg-gray-100 text-gray-600'>
            NT
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Notion</p>
          </div>
          <div className='font-medium'>512 Tool Calls</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/logos/dropbox.png' alt='Dropbox' />
          <AvatarFallback className='bg-black text-white'>DB</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Dropbox</p>
          </div>
          <div className='font-medium'>387 Tool Calls</div>
        </div>
      </div>
    </div>
  )
}
