import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { readdirSync, existsSync } from "fs";

import type { UserConfig } from "vite";

function getChallengesAssets(source: string) {
  if (existsSync(source))
    return readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => ({
        src: [
          `./src/challenges/${dirent.name}/public/fonts`,
          `./src/challenges/${dirent.name}/public/images`,
          `./src/challenges/${dirent.name}/public/data`
        ],
        dest: ""
      }));

  return [];
}

const config: UserConfig = {
  build: {
    sourcemap: true
  },
  plugins: [
    viteStaticCopy({
      targets: getChallengesAssets("./src/challenges")
    }),
    svgr(),
    react(),
    ssr()
  ]
};

export default config;
