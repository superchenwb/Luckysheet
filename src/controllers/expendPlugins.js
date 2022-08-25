import { chart } from '../expendPlugins/chart/plugin';
import { print } from '../expendPlugins/print/plugin';
import { upload } from '../expendPlugins/upload/plugin';
import { download } from '../expendPlugins/download/plugin';

const pluginsObj = {
  chart: chart,
  print: print,
  upload,
  download,
};

const isDemo = true;

/**
 * Register plugins
 */
function initPlugins(plugins, data) {
  if (plugins.length) {
    plugins.forEach(plugin => {
      pluginsObj[plugin](data, isDemo);
    });
  }
}

export { initPlugins };
