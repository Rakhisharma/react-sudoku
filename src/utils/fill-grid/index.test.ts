import { GRID } from 'Typings'
import fillGrid from './index'

describe('fillGrid', () => {
  it('fills an empty grid', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid)
    for (let row in grid) {
      for (let col in grid) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(0)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
    }
  })

  it('fills a valid partially filled grid', () => {
    const grid: GRID = [
      [0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 6, 0],
    ]
    fillGrid(grid)
    for (let row in grid) {
      for (let col in grid) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(0)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
    }
  })
})
