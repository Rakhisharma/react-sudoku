import React, { Children, Dispatch, FC, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import useMouseTrap from 'react-hook-mousetrap'

import Block from './block'
import { Container, Row } from './styles'
import { createGrid } from 'reducers'
import { INDEX } from 'Typings'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  const moveDown = () => {
    console.log('down')
  }

  const moveUp = () => {
    console.log('down')
  }

  const moveLeft = () => {
    console.log('down')
  }

  const moveRight = () => {
    console.log('down')
  }

  useMouseTrap('down', moveDown)
  useMouseTrap('down', moveUp)
  useMouseTrap('down', moveRight)
  useMouseTrap('down', moveLeft)

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
