import React, { FC } from 'react'
import { Button } from 'components'
import { NUMBERS } from 'Typings'

interface IProps {
  value: NUMBERS
}

const NumberButton: FC<IProps> = ({ value }) => {
  const fill = () => {
    return console.log(value)
  }

  return <Button onclick={fill}>{value}</Button>
}

export default NumberButton
