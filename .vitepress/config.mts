import { defineConfig } from 'vitepress'
import { scratchblocksPlugin } from 'sb-mdit'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scratch Specification",
  description: "An explanation of Scratch 3.0",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // https://github.com/vuejs/vitepress/discussions/2475#discussioncomment-11238929
  base: "/scratch-spec/", // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/intro/' },
      { text: 'Index', link: '/index/' },
      { text: 'Ideas', link: '/ideas/' },
      { text: 'Runtime', link: '/runtime/' },
      { text: 'Blocks', link: '/blocks/' },
      { text: 'Files', link: '/files/' },
      { text: 'I/O', link: '/io/' },
      { text: 'Network', link: '/network/' },
      { text: 'Devices', link: '/devices/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/intro/',
        items: [
          { text: 'FAQ', link: '/intro/#faq' },
          { text: 'Contents', link: '/index/' },
          {
            text: 'Contributing', link: '/intro/#contributing', items: [
              { text: 'TODO', link: '/todo/' }
            ]
          }
        ]
      },
      {
        text: 'Concepts',
        link: '/ideas/',
        items: [
          { text: 'Capabilities', link: '/ideas/#capabilities' },
          { text: 'Constants', link: '/ideas/#constants' },
          { text: 'Ideas', link: '/ideas/#ideas' },
          { text: 'Values', link: '/ideas/#values' },
          { text: 'Procedures', link: '/ideas/#procedures' }
        ]
      },
      {
        text: 'Palette',
        link: '/blocks/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OceanIsEndless/scratch-spec' }
    ],

    search: {
      provider: 'local'
    }
  },

  markdown: {
    math: true,
    config: (md) => {
      md.use(scratchblocksPlugin) // https://github.com/OceanIsEndless/scratch-spec/pull/5#issuecomment-3137259965
      // May add more if needed
    }
  }
})
