import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { unregister } from './core'
import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  // <> is also called Fragment. you can use <Fragment> instead of <>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>HelloWorld</div>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
