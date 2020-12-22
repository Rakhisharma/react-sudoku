import React, { FC } from 'react'

const Grid: FC = () => {
  return (
    <div data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <div data-cy="grid-row-container" key={rowIndex}>
          {[...Array(9)].map((_, colIndex) => (
            <div data-cy="block" key={colIndex}></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
