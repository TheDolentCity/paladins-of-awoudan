import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    imageService: false,
    speedInsights: {
      enabled: false,
    },
  }),
  integrations: [
    starlight({
      title: "Paladins of Awoudan",
      components: {
        Aside: "./src/components/overrides/AsideOverride.astro",
        MarkdownContent: "./src/components/overrides/MarkdownContentOverride.astro",
        PageTitle: "./src/components/overrides/PageTitleOverride.astro",
        Sidebar: "./src/components/overrides/SidebarOverride.astro",
      },
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/TheDolentCity/paladins-of-the-woud-ring",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "/introduction",
        },
        {
          label: "Rules",
          autogenerate: {
            directory: "rules",
          },
        },
        {
          label: "Classes",
          autogenerate: {
            directory: "classes",
          },
        },
        {
          label: "Setting",
          collapsed: true,
          autogenerate: {
            directory: "setting",
          },
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
