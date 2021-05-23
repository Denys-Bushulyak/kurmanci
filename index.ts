import { closeSync, openSync, writeSync } from 'fs';
const Crawler = require('node-html-crawler');
const { JSDOM } = require('jsdom');

const crawler = new Crawler({
  protocol: 'https:',
  domain: 'kurmanji.online',
});

const result = [];

crawler.on('data', (data: any) => {
  if (data.result.statusCode === 200) {
    const dom = new JSDOM(data.result.body);

    let body = '';

    for (const tag of dom.window.document.body.getElementsByTagName(
      'article'
    )) {
      if (tag.textContent) {
        body += ' ' + tag.textContent;
      }
    }

    result.push({
      url: data.url,
      title: dom.window.document.title.replace('| Курманджи', ''),
      body,
    });
  }
});
crawler.on('error', console.error);
crawler.on('end', () => {
  const fd = openSync(process.argv[2], 'w');
  writeSync(fd, JSON.stringify(result));
  closeSync(fd);
});

crawler.crawl();
