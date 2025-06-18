import { useState } from 'react'
import { IconBrandGithub, IconBrandGmail } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
  const [selectedIntegration, setSelectedIntegration] = useState('github')

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
              <TabsTrigger value='reports'>Reports</TabsTrigger>
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
          <TabsContent value='reports' className='space-y-4'>
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-xl font-semibold'>Integration Reports</h2>
                <p className='text-muted-foreground text-sm'>
                  View detailed analytics for your connected integrations
                </p>
              </div>
              <Select
                value={selectedIntegration}
                onValueChange={setSelectedIntegration}
              >
                <SelectTrigger className='w-48'>
                  <SelectValue placeholder='Select integration' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='github'>
                    <div className='flex items-center gap-2'>
                      <IconBrandGithub className='h-4 w-4' />
                      GitHub
                    </div>
                  </SelectItem>
                  <SelectItem value='gmail'>
                    <div className='flex items-center gap-2'>
                      <IconBrandGmail className='h-4 w-4' />
                      Gmail
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* GitHub Reports */}
            {selectedIntegration === 'github' && (
              <div className='space-y-4'>
                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Total Commits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>247</div>
                      <p className='text-muted-foreground text-xs'>
                        across all clones this month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Lines of Code
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>2,892</div>
                      <p className='text-muted-foreground text-xs'>
                        +12% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Pull Requests
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>13</div>
                      <p className='text-muted-foreground text-xs'>
                        23 merged this week
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Active Repositories
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>1</div>
                      <p className='text-muted-foreground text-xs'>
                        across 1 organization
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                  <Card className='col-span-1 lg:col-span-4'>
                    <CardHeader>
                      <CardTitle>Code Changes by Clone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                            <span className='text-sm font-medium'>
                              Aditya Iyengar
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>847 lines</div>
                            <div className='text-muted-foreground text-xs'>
                              341 this week
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-green-500'></div>
                            <span className='text-sm font-medium'>
                              Adarsh Ambati
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>234 lines</div>
                            <div className='text-muted-foreground text-xs'>
                              176 this week
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-purple-500'></div>
                            <span className='text-sm font-medium'>
                              Ansh Gupta
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>67 lines</div>
                            <div className='text-muted-foreground text-xs'>
                              67 this week
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-orange-500'></div>
                            <span className='text-sm font-medium'>
                              Luke Ponssen
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>35 lines</div>
                            <div className='text-muted-foreground text-xs'>
                              35 this week
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-red-500'></div>
                            <span className='text-sm font-medium'>
                              Naman Gupta
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>0 lines</div>
                            <div className='text-muted-foreground text-xs'>
                              0 this week
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className='col-span-1 lg:col-span-3'>
                    <CardHeader>
                      <CardTitle>Recent Commits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-2 h-2 w-2 rounded-full bg-blue-500'></div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium'>
                              Aditya Iyengar
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              feat: add authentication middleware
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              2 hours ago
                            </div>
                          </div>
                        </div>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-2 h-2 w-2 rounded-full bg-green-500'></div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium'>
                              Adarsh Ambati
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              fix: resolve database connection issue
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              4 hours ago
                            </div>
                          </div>
                        </div>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-2 h-2 w-2 rounded-full bg-blue-500'></div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium'>
                              Aditya Iyengar
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              docs: update API documentation
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              6 hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Gmail Reports */}
            {selectedIntegration === 'gmail' && (
              <div className='space-y-4'>
                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Emails Drafted
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>342</div>
                      <p className='text-muted-foreground text-xs'>
                        across all clones this month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Emails Sent
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>289</div>
                      <p className='text-muted-foreground text-xs'>
                        84% send rate
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Response Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>67%</div>
                      <p className='text-muted-foreground text-xs'>
                        +5% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Avg Response Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>2.4h</div>
                      <p className='text-muted-foreground text-xs'>
                        -30min from last month
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                  <Card className='col-span-1 lg:col-span-4'>
                    <CardHeader>
                      <CardTitle>Email Activity by Clone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                            <span className='text-sm font-medium'>
                              Aditya Iyengar
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>
                              89 drafted / 76 sent
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              85% send rate
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-green-500'></div>
                            <span className='text-sm font-medium'>
                              Adarsh Ambati
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>
                              72 drafted / 65 sent
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              90% send rate
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-purple-500'></div>
                            <span className='text-sm font-medium'>
                              Ansh Gupta
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>
                              68 drafted / 54 sent
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              79% send rate
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-orange-500'></div>
                            <span className='text-sm font-medium'>
                              Luke Ponssen
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>
                              61 drafted / 52 sent
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              85% send rate
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-2 w-2 rounded-full bg-red-500'></div>
                            <span className='text-sm font-medium'>
                              Naman Gupta
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='text-sm font-bold'>
                              52 drafted / 42 sent
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              81% send rate
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className='col-span-1 lg:col-span-3'>
                    <CardHeader>
                      <CardTitle>Recent Email Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-2 h-2 w-2 rounded-full bg-green-500'></div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium'>
                              Aditya Iyengar
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              Sent: Project update to stakeholders
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              1 hour ago
                            </div>
                          </div>
                        </div>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-2 h-2 w-2 rounded-full bg-yellow-500'></div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium'>
                              Adarsh Ambati
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              Drafted: Meeting follow-up
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              2 hours ago
                            </div>
                          </div>
                        </div>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-2 h-2 w-2 rounded-full bg-green-500'></div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium'>
                              Ansh Gupta
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              Sent: Client proposal review
                            </div>
                            <div className='text-muted-foreground text-xs'>
                              3 hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}

const topNav: {
  title: string
  href: string
  isActive: boolean
  disabled?: boolean
}[] = [
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
