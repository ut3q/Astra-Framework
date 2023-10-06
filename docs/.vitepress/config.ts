import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Astra',
  description: 'The Ultimate Roblox Modular Framework.',
  base: '/Astra-Framework/',
  head: [
    ['link', { rel: "shortcut icon", href: "/images/icon.png"}],
  ],

  themeConfig: {
    logo: '/images/logo.png',

    search: {
      provider: 'local',
    },

    socialLinks: [{ icon: 'discord', link: 'https://discord.gg/vEeXeSxUMw' }],

    // nav: [
    //   {
    //     text: 'Tutorials',
    //     items: [
    //       { text: 'Installation', link: '/Installation' },
    //       { text: 'Networking', link: '/Networking' },
    //     ],
    //   },

    //   {
    //     text: 'API',
    //     items: [
    //       { text: 'Framework', link: '/api/Framework/Client' },
    //       { text: 'Packages', link: '/api/Packages/Console' },
    //     ],
    //   },

    //   {
    //     text: 'Articles',
    //     items: [{ text: 'Blogs', link: '/Blogs' }],
    //   },

    //   {
    //     text: 'Updates',
    //     link: '/Updates',
    //   },

    //   // {
    //   //   text: 'Dropdown Menu',
    //   //   items: [
    //   //     { text: 'Item A', link: '/item-1' },
    //   //     { text: 'Item B', link: '/item-2' },
    //   //     { text: 'Item C', link: '/item-3' },
    //   //   ],
    //   // },

    //   // ...
    // ],

    sidebar: {
      '/api/Framework': [
        {
          text: 'Framework',
          items: [
            { text: 'Client', link: '/api/Framework/Client' },
            { text: 'Global', link: '/api/Framework/Global' },
            { text: 'Server', link: '/api/Framework/Server' },
          ],
        },
      ],
    },
  },
});
