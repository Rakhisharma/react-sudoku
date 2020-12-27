import { SQUARE } from 'Typings'
import isInSquare from './index'

describe('isInCol', () => {
  it('returns true when value is in grid square', () => {
    const square: SQUARE = [
      [1, 3, 4],
      [8, 2, 7],
      [9, 6, 5],
    ]

    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('returns false when value is not grid square', () => {
    const square: SQUARE = [
      [0, 3, 4],
      [8, 2, 7],
      [0, 6, 5],
    ]

    expect(isInSquare({ square, value: 1 })).toBeFalsy()
    expect(isInSquare({ square, value: 9 })).toBeFalsy()
  })
})
