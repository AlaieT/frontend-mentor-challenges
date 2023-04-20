import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { readdirSync } from "fs";

import type { UserConfig } from "vite";

const getChallengesAssets = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({
      src: [
        `./challenges/${dirent.name}/public/fonts`,
        `./challenges/${dirent.name}/public/images`,
        `./challenges/${dirent.name}/public/data`,
      ],
      dest: "",
    }));

const config: UserConfig = {
  plugins: [
    viteStaticCopy({ targets: getChallengesAssets("./challenges") }),
    svgr(),
    react(),
    ssr(),
  ],
};

export default config;
