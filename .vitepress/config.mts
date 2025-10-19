import { defineConfig } from 'vitepress'
import { scratchblocksPlugin } from 'sb-mdit'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scratch Specification",
  description: "An explanation of Scratch 3.0",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // https://github.com/vuejs/vitepress/discussions/2475#discussioncomment-11238929
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/intro/' },
      { text: 'Concepts', link: '/concepts/' },
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
        text: 'Concepts',
        link: '/concepts/',
        items: [
          { text: 'Ideas', link: '/concepts/ideas/' },
          { text: 'Values', link: '/concepts/values/' },
          { text: 'Limits', link: '/concepts/limits/' },
          { text: 'Logic', link: '/concepts/logic/' }
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
        text: 'Other Pages',
        items: [
          { text: 'Single File', link: '/full/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/scratchspec/scratchspec.github.io' }
    ],

    footer: {
      message: '',
      copyright: '<a href="https://github.com/scratchspec/scratchspec.github.io/blob/main/LICENSE">Licensed under CC-BY-4.0</a>'
    },

    editLink: {
      pattern: 'https://github.com/scratchspec/scratchspec.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [1, 6],
      label: 'Contents'
    },

    lastUpdated: {
      formatOptions: {
        dateStyle: 'short'
      }
    }
  },

  markdown: {
    math: true,
    toc: { level: [1, 2, 3, 4, 5, 6] },
    config: (md) => {
      md.use(scratchblocksPlugin) // https://github.com/scratchspec/scratchspec.github.io/pull/5#issuecomment-3137259965
      // May add more if needed
    }
  },
  
  lastUpdated: true,
  sitemap: {
    hostname: 'https://scratchspec.github.io'
  }
})
