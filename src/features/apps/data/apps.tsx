import {
  IconBrandDiscord,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandGmail,
  IconBrandMedium,
  IconBrandNotion,
  IconBrandSkype,
  IconBrandSlack,
  IconBrandStripe,
  IconBrandTelegram,
  IconBrandTrello,
  IconBrandWhatsapp,
  IconBrandZoom,
} from '@tabler/icons-react'

export const apps = [
  {
    name: 'Notion',
    logo: <IconBrandNotion />,
    connected: true,
    desc: 'Effortlessly sync Notion pages for seamless collaboration.',
  },
  {
    name: 'Figma',
    logo: <IconBrandFigma />,
    connected: true,
    desc: 'View and collaborate on Figma designs in one place.',
  },
  {
    name: 'Trello',
    logo: <IconBrandTrello />,
    connected: false,
    desc: 'Sync Trello cards for streamlined project management.',
  },
  {
    name: 'Slack',
    logo: <IconBrandSlack />,
    connected: true,
    desc: 'Integrate Slack for efficient team communication',
  },
  {
    name: 'Zoom',
    logo: <IconBrandZoom />,
    connected: true,
    desc: 'Host Zoom meetings directly from the dashboard.',
  },
  {
    name: 'Stripe',
    logo: <IconBrandStripe />,
    connected: false,
    desc: 'Easily manage Stripe transactions and payments.',
  },
  {
    name: 'Gmail',
    logo: <IconBrandGmail />,
    connected: true,
    desc: 'Access and manage Gmail messages effortlessly.',
  },
  {
    name: 'GitHub',
    logo: <IconBrandGithub />,
    connected: true,
    desc: 'Streamline code management with GitHub integration.',
  },
]
