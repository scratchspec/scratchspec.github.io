import { defineConfig } from 'vitepress'
import { scratchblocksPlugin } from 'sb-mdit'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scratch Specification",
  description: "An explanation of Scratch 3.0",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // https://github.com/vuejs/vitepress/discussions/2475#discussioncomment-11238929
  base: "/scratch-spec/", // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/intro/' },
      { text: 'Ideas', link: '/ideas/' },
      { text: 'Runtime', link: '/runtime/' },
      { text: 'Palette', link: '/palette/' },
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
          {
            text: 'Contribute', link: '/intro/#contributing', items: [
              { text: 'TODO', link: '/todo/' }
            ]
          },
          { text: 'FAQ', link: '/intro/#faq' }
        ]
      },
      {
        text: 'Ideas',
        link: '/ideas/',
        items: [
          { text: 'Concepts', link: '/ideas/concepts/' },
          { text: 'Values', link: '/ideas/values/' },
          { text: 'Limits', link: '/ideas/limits/' },
          { text: 'Logic', link: '/ideas/logic/' }
        ]
      },
      {
        text: 'Palette',
        link: '/palette/',
        items: [
          { text: 'Standard Blocks', link: '/palette/standard/' },
          { text: 'Obsolete Blocks', link: '/palette/obsolete/' },
          { text: 'Nonstandard Blocks', link: '/palette/nonstandard/' }
        ]
      },
      {
        text: 'File Format',
        link: '/files/',
        items: [
          { text: 'Scratch 3 (.sb3)', link: '/files/#sb3' },
          { text: 'Scratch 2 (.sb2)', link: '/files/#sb2' },
          { text: 'Scratch 1 (.sb)', link: '/files/#sb' }
        ]
      },
      {
        text: 'Input / Output',
        link: '/io/',
        items: [

        ]
      },
      {
        text: 'Networking',
        link: '/network/',
        items: [

        ]
      },
      {
        text: 'Scratch Link',
        link: '/devices/',
        items: [

        ]
      },
      {
        text: 'Test Pages',
        items: [
          { text: 'Single File?', link: '/full/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OceanIsEndless/scratch-spec' }
    ],

    footer: {
      message: '',
      copyright: 'Licensed under <a href="https://github.com/OceanIsEndless/scratch-spec/blob/main/LICENSE">CC-BY-4.0</a>'
    },

    editLink: {
      pattern: 'https://github.com/OceanIsEndless/scratch-spec/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [1, 6],
      label: 'Contents'
    }
  },

  markdown: {
    math: true,
    toc: { level: [1, 2, 3, 4, 5, 6] },
    config: (md) => {
      md.use(scratchblocksPlugin) // https://github.com/OceanIsEndless/scratch-spec/pull/5#issuecomment-3137259965
      // May add more if needed
    }
  },
  
  lastUpdated: true,
  sitemap: {
    hostname: 'https://oceanisendless.github.io/scratch-spec/'
  }
})
