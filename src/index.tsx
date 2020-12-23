import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Content, Title, Card, Grid } from 'components'
import { unregister } from 'core'
import { GlobalStyles, theme } from 'styles'

ReactDOM.render(
  // <> is also called Fragment. you can use <Fragment> instead of <>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {/* data-cy 'cy' is cypruss. it is usefull to use it 
    here so that you can see this name in inspect element 
    while debugging */}
    <Content data-cy="Content">
      <Title data-cy="Title">Sudoku</Title>
      <Card data-cy="Card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
