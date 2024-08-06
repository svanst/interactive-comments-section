import postcssPresetEnv from "postcss-preset-env";
import postcssHoverMediaFeature from "postcss-hover-media-feature";

export default {
  plugins: [postcssPresetEnv(), postcssHoverMediaFeature()],
};
