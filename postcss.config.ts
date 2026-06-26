// postcss.config.js
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import cssnanoPresetAdvanced from "cssnano-preset-advanced";

export default {
  plugins: [
    tailwindcss(), // MANDATORY for local dev parsing!
    autoprefixer(),
    cssnano({
      preset: cssnanoPresetAdvanced({
        discardComments: { removeAll: true },
      }),
    }),
  ],
};
