import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: '/unrsnd/' });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'unrsnd',
  distFolder: './dist/unrsnd', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers,
  routes: {},
};
