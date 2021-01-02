import { BLOCK_COORDS, GRID } from 'Typings'

export interface IReducer {
  challengeGrid?: GRID
  selectedBlock?: BLOCK_COORDS
  solvedGrid?: GRID
  workingGrid?: GRID
}
