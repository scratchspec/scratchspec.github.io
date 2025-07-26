import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scratch Specification",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        items: [
          { text: "Contents", link: "/" },
          { text: "Introduction", link: "/intro" },
        ],
      },
    ],
  },
});
