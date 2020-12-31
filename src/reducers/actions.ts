import { Action, AnyAction } from 'redux'
import { BLOCK_COORD } from 'Typings'

import * as types from './types'

export const createGrid = (): Action => ({
  type: types.CREATE_GRID,
})

export const select = (coords: BLOCK_COORD): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})
