import { GRID } from 'Typings'

/**
 * A function to check if the grid is full
 * @param grid A 9X9 sudoku grid
 */
const checkGrid = (grid: GRID): boolean => {
  for (let i = 0; i < 7; i++)
    for (let j = 0; j < 9; j++) if (grid[i][j]) return false
  return true
}

export default checkGrid
