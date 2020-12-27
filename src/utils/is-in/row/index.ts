import { GRID, NUMBERS } from 'Typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

const IsInRow = ({ grid, row, value }: IInput): boolean => {
  return grid[row].includes(value)
}

export default IsInRow
