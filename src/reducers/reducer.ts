import { AnyAction } from 'redux'
import { createFullGrid } from 'utils'
import { IReducer } from './interface'
import * as types from './types'

const intialState: IReducer = {}

const reducer = (state = intialState, action: AnyAction): IReducer => {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFullGrid(),
      }

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlocks: action.coords,
      }
    default:
      return state
  }
}

export default reducer
