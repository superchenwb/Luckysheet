import { seriesLoadScripts, loadLinks } from '../../utils/util';
import { getScreenshot } from '../../global/api';

// Dynamically load dependent scripts and styles
const dependScripts = [
  'luckysheet/expendPlugins/print/print.min.js',
  //   'https://printjs-4de6.kxcdn.com/print.min.js',
];

const dependLinks = [
  //   'https://printjs-4de6.kxcdn.com/print.min.css',
  'luckysheet/expendPlugins/print/print.min.css',
];

// Initialize the print component
function print(data, isDemo) {
  loadLinks(dependLinks);

  seriesLoadScripts(dependScripts, null, function() {});
}

function onClickPrint(type) {
  if (type === 'print') {
    // 1. 实现全选
    $('#luckysheet-left-top').click();
  }
  // 2. 生成选区的截图
  const src = getScreenshot();
  window.printJS({ printable: src, type: 'image', base64: true });
}

export { print, onClickPrint };
