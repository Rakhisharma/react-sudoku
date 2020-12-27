import shuffle from './index'

describe('shuffle', () => {
  it('returns the an array with same length after being shuffles', () => {
    const array = [1, 2, 3]
    shuffle(array)
    console.log(array)
    expect(array).toHaveLength(3)
  })

  it('return the array with same element after being shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    console.log(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})
