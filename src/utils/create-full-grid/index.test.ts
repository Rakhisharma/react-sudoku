import { GRID } from 'Typings'
import createFullGrid from './index'

describe('createFullGrid', () => {
  it('return 9x9 grid with value range 1 to 9', () => {
    const grid = createFullGrid()
    for (let row in grid) {
      for (let col in grid) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(0)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
    }
  })
})
