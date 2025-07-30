import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scratch Specification",
  base: "/scratch-spec/", // https://vitepress.dev/guide/deploy#setting-a-public-base-path

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/intro/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'Runtime', link: '/runtime/' },
      { text: 'Blocks', link: '/palette/' },
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
          { text: 'Frequently Asked Questions', link: '/intro/#faq' },
          { text: 'Contributing Guidelines', link: '/intro/#contributing' }
        ]
      },
      {
        text: 'Concepts',
        link: '/concepts/',
        items: [
          { text: 'Capabilities', link: '/concepts/#capabilities' },
          { text: 'Constants', link: '/concepts/#constants' },
          { text: 'Ideas', link: '/concepts/#ideas' },
          { text: 'Values', link: '/concepts/#values' },
          { text: 'Procedures', link: '/concepts/#procedures' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OceanIsEndless/scratch-spec' }
    ],

    search: {
      provider: 'local'
    }
  }
})
