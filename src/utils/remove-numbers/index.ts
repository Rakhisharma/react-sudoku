import { GRID } from 'Typings'
import { copyGrid, getRandomIndex, solveGrid } from 'utils'
import global from 'global'

/**
 * Remove numbers from a full grid to create a sudoku puzzle
 * @param grid 9x9 sudoku grid
 * @param attempts number of attemps to solve(higher means more difficult)- default 5
 */
const removeNumbers = (grid: GRID, attempts = 5) => {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    //copy grid
    const gridCopy = copyGrid(grid)
    //set a global counter
    global.counter = 0

    //attempt to solve the grid
    solveGrid(gridCopy)
    //if global counter is not 1
    //inside this grid[row][col] = backup
    //decrement attempts
    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }
  return grid
}

export default removeNumbers
