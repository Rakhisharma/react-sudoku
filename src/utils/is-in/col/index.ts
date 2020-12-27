import { GRID, NUMBERS } from 'Typings'
interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}
/**
 * A function that returns true is the values is already being used in the current grid column.
 * @param param0 grid Object with 9X9 Sudoku grid, column and values
 */

const isInCol = ({ grid, col, value }: IInput): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }
  return false
}

export default isInCol
