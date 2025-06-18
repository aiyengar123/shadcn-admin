import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ActiveDataSources } from './components/active-data-sources'
import { MostRequestedTeams } from './components/most-requested-teams'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'

export default function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
          <div className='flex items-center space-x-2'>
            <Button>Download</Button>
          </div>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics' disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total Clones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>5</div>
                  <p className='text-muted-foreground text-xs'>
                    +20% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Critical Error Tickets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>2</div>
                  <p className='text-muted-foreground text-xs'>
                    -50% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Overall Utilization Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>80%</div>
                  <p className='text-muted-foreground text-xs'>
                    of clones are actively queried
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Average Interactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>6</div>
                  <p className='text-muted-foreground text-xs'>
                    tool calls per clone
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Requests Over Time</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Most Active Clones</CardTitle>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
              <Card className='col-span-1'>
                <CardHeader>
                  <CardTitle>Most Active Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ActiveDataSources />
                </CardContent>
              </Card>
              <Card className='col-span-1'>
                <CardHeader>
                  <CardTitle>Most Requested Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <MostRequestedTeams />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}

const topNav = [
  {},
  // {
  //   title: 'Overview',
  //   href: 'dashboard/overview',
  //   isActive: true,
  //   disabled: false,
  // },
  // {
  //   title: 'Customers',
  //   href: 'dashboard/customers',
  //   isActive: false,
  //   disabled: true,
  // },
  // {
  //   title: 'Products',
  //   href: 'dashboard/products',
  //   isActive: false,
  //   disabled: true,
  // },
  // {
  //   title: 'Settings',
  //   href: 'dashboard/settings',
  //   isActive: false,
  //   disabled: true,
  // },
]
