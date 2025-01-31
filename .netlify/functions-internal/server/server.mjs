export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nuxt@3.15.4",
  path: "/*",
  excludedPath: ["/.netlify/*","/_nuxt/builds/meta/*","/_nuxt/builds/*","/_fonts/*","/_nuxt/*"],
  preferStatic: true,
};