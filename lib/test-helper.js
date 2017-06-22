import assert from 'assert'
import shell from 'shelljs'
import chalk from 'chalk'

const NAME = process.env.NAME

let stdout = ''
let index = 0

const testCmd = () => {
  shell.config.silent = true
  stdout = shell.exec(
    `NODE_PATH=. cat src/${NAME}/input/input-${index}.txt | babel-node src/${NAME}`
  )
  shell.config.reset()
  index++
}

const clearCmd = () => {
  shell.exec('clear')
}

export default input => {
  before(clearCmd)
  describe(`\n 👻  Running tests for ${chalk.bold(NAME)}:`, () => {
    beforeEach(testCmd)
    input.forEach((shouldBe, i) => {
      it(`${chalk.blue.bold('test-' + i)}: should be ${chalk.bold(
        shouldBe
      )}`, () => {
        assert.equal(stdout.stdout, shouldBe)
      })
    })
  })
}
