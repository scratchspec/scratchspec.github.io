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
          { text: "FAQ", link: "faq" },
          { text: "TODO", link: "/todo" },
        ],
      },
      {
        text: "Concepts",
        items: [
          { text: "Capabilities", link: "/concepts/capabilities" },
          { text: "Constants", link: "/concepts/constants" },
          { text: "Ideas", link: "/concepts/ideas" },
        ],
      },
    ],
  },
});
