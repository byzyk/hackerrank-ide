import cheerio from 'cheerio';

const SAMPLE_INPUT = 'Sample Input';
const SAMPLE_OUTPUT = 'Sample Output';

export const getTitleFromURL = url => {
  return url.split('//')[1].split('/')[2];
};

export const getCode = input => {
  const arr = [];

  input.each((i, item) => {
    const code = cheerio(item)
      .next('pre')
      .text();
    arr.push(code);
  });

  return arr;
};

export const parseProject = data => {
  const project = {};
  const inputs = data.content.find(`p:contains(${SAMPLE_INPUT})`);
  const outputs = data.content.find(`p:contains(${SAMPLE_OUTPUT})`);

  project['title'] = data.title;
  project['inputs'] = getCode(inputs);
  project['outputs'] = getCode(outputs);

  return project;
};

export const getProjectPaths = title => {
  const ROOT = `./src/hackerrank/${title}`;
  const INCLUDES = './lib/new-project/includes';
  return {
    ROOT,

    INPUTS: `${ROOT}/inputs`,
    OUTPUTS: `${ROOT}/outputs`,

    TEST_COPY_FROM: `${INCLUDES}/_test.js`,
    TEST_COPY_TO: `${ROOT}/test.js`,

    INDEX_JS_FROM: `${INCLUDES}/_index.js`,
    INDEX_JS: `${ROOT}/index.js`,
    INDEX_PY: `${ROOT}/main.py`,
  };
};
