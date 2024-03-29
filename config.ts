import { Config } from './src/lib/config.types';

export const config: Config = {
  themeColor: "#16cc48",
  logoURL: "/images/logo.png",
  site: {
    url: "https://www.skvad.eu/",
    title: "TitaniumZ",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for SKVAD Community",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "Home | TitaniumZ",
      description: "Welcome to the TitaniumZ Community Website! We are a DayZ community that is dedicated to providing the best experience for our players. Join us today!",
      sections: {
        network: {
          title: "Server Network",
          description: "Our DayZ servers are hosted in the UK but are maintained by our dedicated team of developers and system administrators within the USA.",
        },
        about: {
          title: "About Us",
          description: "We are a community of DayZ players who are passionate about the game and the experiences it provides. We strive to provide a safe and enjoyable environment for all players.",
          rows: {
            1: {
              title: "Events",
              description: "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.jpg",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description: "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.jpg",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Our team of developers are constantly working to improve the server and add new features. We welcome feedback and suggestions from our players.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions or concerns, please don't hesitate to contact us through the following channels.",
          links: {
            'Discord': "https://discord.com/invite/cAwwshYWsd",
            'Email(Coming Soon)': "",
          },
        },
      },
    },
  },
  hero: {
    title: "We listen, we learn, we deliver.",
    description: "Our DayZ Community is built on the principles of transparency, integrity, and trust. We are committed to providing the best experience for our players. Wether you are a seasoned veteran or a new player, we have a place for you.",
    background: {
      color: 'rgb(22 204 72)',
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Join us today!",
      href: "https://discord.com/invite/cAwwshYWsd",
    },
  },
  servers: [
    {
      name: 'TitaniumZ PVE #1',
      ipv4: '213.170.135.132',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '',
    },
    {
      name: 'TitaniumZ PVE #2 (Namalsk Soon)',
      ipv4: '213.170.135.132',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '',
    },
    {
      name: 'TitaniumZ PVE #3 (Deerisle Soon)',
      ipv4: '213.170.135.132',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '',
    },
  ],
  cftools: {
    leaderboard: {
      enabled: false,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime', 'suicides'],
      blacklistedCFToolsIds: [],
      showAmount: 100,
    },
  },
  footer: {
    trademarkNotice: "The DayZ logo is a registered trademark of Bohemia Interactive a.s. TitaniumZ is not affiliated with Bohemia Interactive a.s. or DayZ. All other trademarks are the property of their respective owners.",
    brandingName: "TitaniumZ Community Website",
    brandingURL: '/',
    initialCopyrightYear: 2024,
    copyrightBrandName: "TitaniumZ",
    copyrightBrandUrl: '/',
    links: [
      {
        url: '#',
        label: 'About',
      },
      {
        url: '#',
        label: 'Meet the Team',
      },
      {
        url: '#',
        label: 'Campaigns',
      },
      {
        url: '#',
        label: 'Blog',
      },
      {
        url: '#',
        label: 'Affiliate Program',
      },
      {
        url: '#',
        label: 'FAQs',
      },
      {
        url: '#',
        label: 'Contact',
      },
    ],
  },
};
