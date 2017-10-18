import fs from 'fs';
import mkdirp from 'mkdirp';
import phantom from 'phantom';
import cheerio from 'cheerio';
import { getTitleFromURL, parseProject, getProjectPaths } from './misc';

const URL = process.env.URL;
const TYPE = process.env.TYPE || 'js';

const createProject = project => {
  const PATH = getProjectPaths(project.title);
  const type = TYPE.toUpperCase();

  if (!fs.existsSync(PATH.ROOT)) {
    mkdirp(PATH.ROOT, err => {
      if (err) {
        console.log(err);
      } else {
        mkdirp(PATH.INPUTS);
        mkdirp(PATH.OUTPUTS);

        fs
          .createReadStream(PATH.TEST_COPY_FROM)
          .pipe(fs.createWriteStream(PATH.TEST_COPY_TO));

        if (type === 'JS') {
          fs
            .createReadStream(PATH.INDEX_JS_FROM)
            .pipe(fs.createWriteStream(PATH.INDEX_JS));
        } else {
          fs.createWriteStream(PATH[`INDEX_${TYPE.toUpperCase()}`]);
        }

        for (let i = 0; i < project.inputs.length; i++) {
          fs.writeFile(`${PATH.INPUTS}/input-${i}.txt`, project.inputs[i]);
          fs.writeFile(`${PATH.OUTPUTS}/output-${i}.txt`, project.outputs[i]);
        }

        console.log(`Project '${project.title}' created!`);
      }
    });
  } else {
    console.log('Project with this name already exists.');
  }
};

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const status = await page.open(URL);

  if (status === 'success') {
    const html = await page.property('content');
    const title = getTitleFromURL(URL);
    const content = cheerio.load(html)('.challenge-content');

    const data = {
      title,
      content,
    };

    createProject(parseProject(data));
    // console.log(parseProject(data));
  }

  await instance.exit();
})();
