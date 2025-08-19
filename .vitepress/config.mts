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
          {
            text: 'Contribute', link: '/intro/#contributing', collapsed: true, items: [
              { text: 'TODO', link: '/todo/' }
            ]
          },
          { text: 'FAQ', link: '/intro/#faq' },
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
        link: '/blocks/',
        items: [
          { text: 'Standard Blocks', link: '/blocks/standard/' },
          { text: 'Obsolete Blocks', link: '/blocks/obsolete/' },
          { text: 'Nonstandard Blocks', link: '/blocks/nonstandard/' }
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
        text: 'Test Pages',
        collapsed: true,
        items: [
          { text: 'Single File?', link: '/full/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OceanIsEndless/scratch-spec' }
    ],

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
  }
})
