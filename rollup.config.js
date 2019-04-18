import { terser } from "rollup-plugin-terser";

export default {
  input: "src/bootstrap-offscreen.js",
  output: {
    file: "dist/bootstrap-offscreen.js",
    format: "iife"
  },
  plugins: [terser()]
};
