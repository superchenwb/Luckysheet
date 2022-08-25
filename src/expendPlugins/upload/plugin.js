import { seriesLoadScripts, loadLinks } from '../../utils/util';
import { luckysheet } from '../../core';
import Store from '../../store';

// Dynamically load dependent scripts and styles
const dependScripts = [
  'luckysheet/expendPlugins/upload/luckyexcel.umd.js',
  // 'expendPlugins/upload/luckyexcel.umd.js',
];

const dependLinks = [
  // 'luckysheet/expendPlugins/print/print.min.css',
];

// Initialize the print component
function upload(data, isDemo) {
  loadLinks(dependLinks);

  seriesLoadScripts(dependScripts, null, function() {});
}

function onClickUpload(file) {
  let name = file.name;
  let suffixArr = name.split('.'),
    suffix = suffixArr[suffixArr.length - 1];
  if (suffix !== 'xlsx') {
    alert('Currently only supports the import of xlsx files');
    return;
  }
  // Make sure to get the xlsx file first, and then use the global method window.LuckyExcel to convert
  window.LuckyExcel.transformExcelToLucky(file, function(exportJson, luckysheetfile) {
    if (exportJson.sheets == null || exportJson.sheets.length === 0) {
      alert('Failed to read the content of the excel file, currently does not support xls files!');
      return;
    }
    luckysheet.create({
      ...Store.toJsonOptions,
      showinfobar: false,
      data: exportJson.sheets,
      title: exportJson.info.name,
      userInfo: exportJson.info.name.creator,
    });
  });
}

export { upload, onClickUpload };
