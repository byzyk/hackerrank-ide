import fs from 'fs';
import phantom from 'phantom';
import cheerio from 'cheerio';

const URL = process.env.URL;
const SAMPLE_INPUT = 'Sample Input';
const SAMPLE_OUTPUT = 'Sample Output';

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const status = await page.open(URL);

  if (status === 'success') {
    const html = await page.property('content');
    const $ = cheerio.load(html);

    const content = $('.hackdown-content');
    const inputs = content.find(`p:contains(${SAMPLE_INPUT})`);
    const outputs = content.find(`p:contains(${SAMPLE_OUTPUT})`);
  }

  await instance.exit();
})();
