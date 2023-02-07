"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("@scullyio/scully-plugin-puppeteer");
exports.config = {
    projectRoot: './src',
    projectName: 'unrsnd',
    distFolder: './dist/unrsnd',
    outDir: './dist/static',
    defaultPostRenderers: [],
    routes: {},
};
