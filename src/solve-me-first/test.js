import assert from 'assert'
import { NAME, stdout, index, runCmd } from '../../lib/test-helper'

describe(`Testing ${NAME}:`, () => {
  beforeEach(runCmd)

  // Describe tests below.
  it(`test - ${index}`, function() {
    const shouldBe = 15
    assert.equal(shouldBe, stdout)
  })

  it(`test - ${index}`, function() {
    const shouldBe = 20
    assert.equal(shouldBe, stdout)
  })
})
