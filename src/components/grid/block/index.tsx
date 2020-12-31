import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { IReducer, selectBlock } from 'reducers'
import { Container } from './styles'
import { INDEX, N } from 'Typings'
interface Props {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  value: N
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlocks }) => ({
    isActive: selectedBlocks
      ? selectedBlocks[0] === rowIndex && selectedBlocks[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const handleClick = () => {
    dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {/* if value is 0 then grid should be empty */}
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
