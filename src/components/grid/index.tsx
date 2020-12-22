import React, { Children, FC } from 'react'
import { Container, Row } from './styles'

const Grid: FC = () => {
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
                <div data-cy="block" key={colIndex}>
                  Test
                </div>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
