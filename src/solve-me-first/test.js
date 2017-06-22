import assert from 'assert'
import shell from 'shelljs'

describe('test', function() {
  it('should eq test', function() {
    const res = shell.exec(
      'cat src/solve-me-first/input | babel-node src/solve-me-first'
    )
    assert.equal(15, res)
  })
})
