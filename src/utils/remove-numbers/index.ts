import { GRID } from 'Typings'
import { getRandomIndex } from 'utils'

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

    //set a global counter

    //attempt to solve the grid

    //if global counter is not 1
    //inside this grid[row][col] = backup
    //decrement attempts
  }
  return grid
}

export default removeNumbers
