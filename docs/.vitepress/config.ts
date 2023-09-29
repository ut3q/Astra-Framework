import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Astra Framework',
  description: 'The Ultimate Roblox Modular Framework.',
  logo: 

  themeConfig: {
    nav: [
      {
        text: 'API',
        items: [
          { text: 'Server', link: '/Server' },
          { text: 'Client', link: '/Client' },
          { text: 'Global', link: '/Global' },
        ],
      },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          {
            text: 'API',
            items: [
              { text: 'Server', link: '/Server' },
              { text: 'Client', link: '/Client' },
              { text: 'Global', link: '/Global' },
            ],
          },
          // ...
        ],
      },
    ],
  },
});
