/* @flow */
/* eslint import/no-nodejs-modules: off */
// @ts-ignore
import { getWebpackConfig } from "@krakenjs/grumbler-scripts/config/webpack.config";

const FILE_NAME = "paypal-sdk-constants";
const MODULE_NAME = "ppsdkconstants";

export const WEBPACK_CONFIG = getWebpackConfig({
  entry: "./index.ts",
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
});

export const WEBPACK_CONFIG_MIN = getWebpackConfig({
  entry: "./index.ts",
  filename: `${FILE_NAME}.min.js`,
  modulename: MODULE_NAME,
  minify: true,
  vars: {
    __MIN__: true,
  },
});

export const WEBPACK_CONFIG_TEST = getWebpackConfig({
  entry: "./index.ts",
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
  options: {
    devtool: "inline-source-map",
  },
  vars: {
    __TEST__: true,
  },
});

export default [WEBPACK_CONFIG, WEBPACK_CONFIG_MIN]; // eslint-disable-line import/no-default-export
