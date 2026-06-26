import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import cssnanoPresetAdvanced from "cssnano-preset-advanced";

/** @type {import('postcss').ProcessOptions} */
export default {
  plugins: [
    autoprefixer(),
    cssnano({
      preset: cssnanoPresetAdvanced({
        discardComments: { removeAll: true },
      }),
    }),
  ],
};
