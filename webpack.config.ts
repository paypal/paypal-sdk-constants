/* @flow */
/* eslint import/no-nodejs-modules: off */

// @ts-expect-error the config import
import { getWebpackConfig } from "@krakenjs/grumbler-scripts/config/webpack.config";

const FILE_NAME = "paypal-sdk-constants";
const MODULE_NAME = "ppsdkconstants";

export const WEBPACK_CONFIG = getWebpackConfig({
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
  entry: "src/index.ts",
});

export const WEBPACK_CONFIG_MIN = getWebpackConfig({
  filename: `${FILE_NAME}.min.js`,
  modulename: MODULE_NAME,
  minify: true,
  vars: {
    __MIN__: true,
  },
  entry: "src/index.ts",
});

export const WEBPACK_CONFIG_TEST = getWebpackConfig({
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
  options: {
    devtool: "inline-source-map",
  },
  vars: {
    __TEST__: true,
  },
  entry: "src/index.ts",
});

export default [WEBPACK_CONFIG, WEBPACK_CONFIG_MIN]; // eslint-disable-line import/no-default-export
