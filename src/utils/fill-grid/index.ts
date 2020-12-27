import { GRID, NUMBERS } from 'Typings'
import { isInRow, isInCol, shuffle } from 'utils'
import identifyWorkingSquare from 'utils/identify-square'
import { isInSquare } from 'utils/is-in'

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
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            // is it not in grid  square?
            // ....id yes, then

            const square = identifyWorkingSquare({ grid, row, col })
            if (!isInSquare({ square, value })) grid[row][col] = value
            // check if grid is full, if yes, stop and return true.
            if (true) {
              return true
            }

            // otherwise we run fillGrid(grid) again
          }
        }
      }
      //do stuff
      //recursive things
      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
