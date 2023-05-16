import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { readdirSync } from "fs";
import path from "path";

import type { UserConfig } from "vite";

function getChallengesAssets(source: string) {
  return readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({
      src: [
        path.resolve(__dirname, `/src/challenges/${dirent.name}/public/fonts`),
        path.resolve(__dirname, `/src/challenges/${dirent.name}/public/images`),
        path.resolve(__dirname, `/src/challenges/${dirent.name}/public/data`)
      ],
      dest: ""
    }));
}

const config: UserConfig = {
  plugins: [
    viteStaticCopy({
      targets: getChallengesAssets(path.resolve(__dirname, "/src/challenges"))
    }),
    svgr(),
    react(),
    ssr()
  ]
};

export default config;
