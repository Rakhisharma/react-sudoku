import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  // <> is also called Fragment. you can use <Fragment> instead of <>
  <>
    <GlobalStyles />
    <div>HelloWorld</div>
  </>,
  document.getElementById('root')
)

unregister()
