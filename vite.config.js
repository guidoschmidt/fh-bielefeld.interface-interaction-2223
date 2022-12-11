// vite.config.js
import { defineConfig } from "vite";
import fs from "fs";
import { resolve } from "path";

const excludes = [".DS_Store"];
const entryDirs = ["assignments", "praxis"];

const entries = {
  main: resolve(__dirname, "index.html"),
};

entryDirs.map((dir) => {
  const subdirs = fs.readdirSync(resolve(__dirname, dir));
  subdirs
    .filter((sd) => !excludes.includes(sd))
    .map((sd) => {
      console.log(sd);
      entries[sd] = resolve(__dirname, dir, sd, "index.html");
    });
});

export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {
      input: entries,
    },
  },
});
