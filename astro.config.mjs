import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind(),
    react(),
    partytown(),
  ],
});
