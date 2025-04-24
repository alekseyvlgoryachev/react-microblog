const FileSystem = require('fs');
const Cheerio = require('cheerio');

// Загружаем webpack конфиг
let WebpackConfig = require('./webpack.config.js');

// Если конфиг является функцией (например, для разных окружений)
if (typeof WebpackConfig === 'function') {
  WebpackConfig = WebpackConfig({}, { mode: process.env.NODE_ENV || 'production' });
}

// Получаем путь к выходному файлу
let sScriptPath = '';
if (WebpackConfig.output) {
    sScriptPath = WebpackConfig.output.filename;
}

const sHtmlContent = FileSystem.readFileSync('public/index.html', 'utf-8');
const CheerioInstance = Cheerio.load(sHtmlContent);

CheerioInstance('html').attr('lang', 'ru');
CheerioInstance('title').text('React Microblog');

CheerioInstance('head').append(`
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome/font-awesome.css">
`);

CheerioInstance('body').append(`
    <script src="${sScriptPath}"></script>
`);

FileSystem.writeFileSync("docs/index.html", CheerioInstance.html());
