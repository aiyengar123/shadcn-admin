import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    hour: '00:00',
    requests: Math.floor(Math.random() * 200) + 50,
  },
  {
    hour: '01:00',
    requests: Math.floor(Math.random() * 100) + 20,
  },
  {
    hour: '02:00',
    requests: Math.floor(Math.random() * 80) + 10,
  },
  {
    hour: '03:00',
    requests: Math.floor(Math.random() * 60) + 5,
  },
  {
    hour: '04:00',
    requests: Math.floor(Math.random() * 50) + 5,
  },
  {
    hour: '05:00',
    requests: Math.floor(Math.random() * 70) + 10,
  },
  {
    hour: '06:00',
    requests: Math.floor(Math.random() * 150) + 30,
  },
  {
    hour: '07:00',
    requests: Math.floor(Math.random() * 250) + 80,
  },
  {
    hour: '08:00',
    requests: Math.floor(Math.random() * 300) + 120,
  },
  {
    hour: '09:00',
    requests: Math.floor(Math.random() * 350) + 150,
  },
  {
    hour: '10:00',
    requests: Math.floor(Math.random() * 400) + 180,
  },
  {
    hour: '11:00',
    requests: Math.floor(Math.random() * 450) + 200,
  },
  {
    hour: '12:00',
    requests: Math.floor(Math.random() * 500) + 250,
  },
  {
    hour: '13:00',
    requests: Math.floor(Math.random() * 480) + 230,
  },
  {
    hour: '14:00',
    requests: Math.floor(Math.random() * 460) + 220,
  },
  {
    hour: '15:00',
    requests: Math.floor(Math.random() * 440) + 210,
  },
  {
    hour: '16:00',
    requests: Math.floor(Math.random() * 420) + 200,
  },
  {
    hour: '17:00',
    requests: Math.floor(Math.random() * 380) + 180,
  },
  {
    hour: '18:00',
    requests: Math.floor(Math.random() * 320) + 150,
  },
  {
    hour: '19:00',
    requests: Math.floor(Math.random() * 280) + 120,
  },
  {
    hour: '20:00',
    requests: Math.floor(Math.random() * 240) + 100,
  },
  {
    hour: '21:00',
    requests: Math.floor(Math.random() * 200) + 80,
  },
  {
    hour: '22:00',
    requests: Math.floor(Math.random() * 180) + 60,
  },
  {
    hour: '23:00',
    requests: Math.floor(Math.random() * 160) + 40,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey='hour'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Line
          type='monotone'
          dataKey='requests'
          stroke='currentColor'
          strokeWidth={2}
          dot={false}
          className='stroke-primary'
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
