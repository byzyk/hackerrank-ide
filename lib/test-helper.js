import assert from 'assert'
import shell from 'shelljs'

const NAME = process.env.NAME

let stdout = ''
let index = 0

const runCmd = () => {
  stdout = shell.exec(
    `NODE_PATH=. cat src/${NAME}/input/input-${index}.txt | babel-node src/${NAME}`
  )
  index++
}

export default input => {
  describe(`Testing ${NAME}:`, () => {
    beforeEach(runCmd)

    input.forEach((shouldBe, i) => {
      it(`test${i}: should equal to ${shouldBe}`, function() {
        assert.equal(shouldBe, stdout)
      })
    })
  })
}
