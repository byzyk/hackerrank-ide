import cheerio from 'cheerio';

const SAMPLE_INPUT = 'Sample Input';
const SAMPLE_OUTPUT = 'Sample Output';

export const getTitleFromURL = url => {
  return url.split('//')[1].split('/')[2];
};

export const getCodeFromP = input => {
  const arr = [];

  input.each((i, item) => {
    const code = cheerio(item)
      .next('pre')
      .text();
    arr.push(code);
  });

  return arr;
};

export const getCodeFromClass = input => {
  const arr = [];

  input.each((i, item) => {
    const code = cheerio(item)
      .text()
      .slice(0, -1);
    arr.push(code);
  });

  return arr;
};

export const parseProject = data => {
  const project = {};
  project['title'] = data.title;

  const inputs = data.content.find('.challenge_sample_input_body');
  const outputs = data.content.find('.challenge_sample_output_body');

  if (inputs.length && outputs.length) {
    project['inputs'] = getCodeFromClass(inputs);
    project['outputs'] = getCodeFromClass(outputs);
  } else {
    project['inputs'] = getCodeFromP(
      data.content.find(`p:contains(${SAMPLE_INPUT})`),
    );
    project['outputs'] = getCodeFromP(
      data.content.find(`p:contains(${SAMPLE_OUTPUT})`),
    );
  }

  return project;
};

export const getProjectPaths = title => {
  const ROOT = `./src/hackerrank/${title}`;
  const INCLUDES = './lib/new-project/includes';
  return {
    ROOT,

    INPUTS: `${ROOT}/input`,
    OUTPUTS: `${ROOT}/output`,

    TEST_COPY_FROM: `${INCLUDES}/_test.js`,
    TEST_COPY_TO: `${ROOT}/test.js`,

    INDEX_JS_FROM: `${INCLUDES}/_index.js`,
    INDEX_JS: `${ROOT}/index.js`,
    INDEX_PY: `${ROOT}/main.py`,
  };
};
