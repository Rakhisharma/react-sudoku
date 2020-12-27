import { NUMBERS, SQUARE } from 'Typings'
interface IInput {
  square: SQUARE
  value: NUMBERS
}
/**
 * A function that returns true is the values is already being used in the current grid column.
 * @param param0 grid Object with 9X9 Sudoku grid, column and values
 */

const isInSquare = ({ square, value }: IInput): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
