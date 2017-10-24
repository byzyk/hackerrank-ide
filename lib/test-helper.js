import assert from 'assert';
import shell, { error } from 'shelljs';
import chalk from 'chalk';

const NAME = process.env.NAME;
const TYPE = process.env.TYPE;
const DEBUG = false;

let stdout = '';
let index = 0;

const testCmd = () => {
  const command = `NODE_PATH=. cat src/${NAME}/input/input-${index}.txt |`;
  if (!DEBUG) shell.config.silent = true;
  if (TYPE === 'py') {
    stdout = shell.exec(`${command} python src/${NAME}/main.py`);
  } else if (TYPE === 'py3') {
    stdout = shell.exec(`${command} python3 src/${NAME}/main.py`);
  } else if (TYPE === 'js') {
    stdout = shell.exec(`${command} babel-node src/${NAME}`);
  }
  if (error()) console.log(chalk.red(stdout.stderr));
  shell.config.reset();

  index++;
};

const clearCmd = () => {
  shell.exec('clear');
};

export default input => {
  before(clearCmd);

  describe(`\n 👻  Testing ${chalk.bold(NAME)}:`, function() {
    this.timeout(5000);
    beforeEach(testCmd);
    input.forEach((shouldBe, i) => {
      it(chalk.blue.bold('test-' + i), () => {
        assert.equal(stdout.stdout, shouldBe);
      });
    });
  });
};
