import { GRID, NUMBERS } from 'Typings'
import { isInRow, shuffle } from 'utils'

const gridExample: GRID = [
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

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the possible combination of numbers until a solution is found
 * @param grid 9x9 sudoku grid
 */
const fillGrid = (grid: GRID) => {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
      for (let value of numbers) {
        // is it not in row?
        if (!isInRow(grid, row, value)) {
          // is it not in col?
          let isNotInCol = true
          for (let i = 0; i < 9; i++) {
            if (value === grid[i][col]) isNotInCol = false
          }

          if (isNotInCol) {
            // is it not in grid  square?
          }
        }
        // ....id yes, then
        grid[row][col] = value

        // check if grid is full, if yes, stop and return true.
        // otherwise we run fullGrid(grid) again
      }
      //do stuff
      //recursive things
      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
