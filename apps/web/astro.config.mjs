import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://clown-tunes.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false })],
});
