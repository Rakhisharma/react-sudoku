import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { IReducer } from 'reducers'
import { Container } from './styles'
import { N } from 'Typings'
interface Props {
  colIndex: number
  rowIndex: number
}

interface IState {
  value: N
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {/* if value is 0 then grid should be empty */}
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
