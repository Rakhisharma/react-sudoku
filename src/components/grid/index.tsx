import React, { Children, Dispatch, FC, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import useMouseTrap from 'react-hook-mousetrap'

import Block from './block'
import { Container, Row } from './styles'
import { createGrid, IReducer } from 'reducers'
import { BLOCK_COORD, INDEX } from 'Typings'

interface IState {
  selectedBlocks?: BLOCK_COORD
}
const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlocks }) => ({
    selectedBlocks,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  const moveDown = () => {
    if (state.selectedBlocks && state.selectedBlocks[0] < 8) console.log('down')
  }

  const moveUp = () => {
    if (state.selectedBlocks && state.selectedBlocks[0] > 0) console.log('up')
  }

  const moveLeft = () => {
    if (state.selectedBlocks && state.selectedBlocks[1] > 0) console.log('left')
  }

  const moveRight = () => {
    if (state.selectedBlocks && state.selectedBlocks[1] < 8)
      console.log('right')
  }

  useMouseTrap('down', moveDown)
  useMouseTrap('up', moveUp)
  useMouseTrap('right', moveRight)
  useMouseTrap('left', moveLeft)

  return (
    <Container data-cy="grid-container">
      {/* Use Children.toArray() to map items, as in this way you
        you don't have to pass 'key' or 'id' in your div. if you use just array
        you need to pass key in you element, react provides a way to get rid of this 
        using Children.toArray()*/}
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
