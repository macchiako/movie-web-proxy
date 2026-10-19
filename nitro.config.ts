import { join } from "path";
import pkg from "./package.json";

export default defineNitroConfig({
  preset: "cloudflare-module",
  noPublicDir: true,
  srcDir: "./src",
  runtimeConfig: {
    version: pkg.version
  },
  alias: {
    "@": join(__dirname, "src")
  }
});
