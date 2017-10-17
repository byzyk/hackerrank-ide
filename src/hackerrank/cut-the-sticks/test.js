import fs from 'fs';
import test, { outputPath } from 'lib/test-helper';
const path = `${__dirname}/output/`;
const output = [];

fs.readdirSync(path).forEach((file, i) => {
  output[i] = fs.readFileSync(`${path}${file}`).toString();
});

test(output);
