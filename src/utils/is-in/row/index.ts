import { GRID, NUMBERS } from 'Typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * A function that returns true is the values is already being used in the current grid row.
 * @param grid Object with 9X9 Sudoku grid
 * @param row  index with 9X9 Sudoku grid
 * @param value values with 9X9 Sudoku grid
 */

const IsInRow = ({ grid, row, value }: IInput): boolean => {
  return grid[row].includes(value)
}

export default IsInRow
