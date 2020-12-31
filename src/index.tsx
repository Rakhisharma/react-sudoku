import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { Content, Title, Card, Grid } from 'components'
import { configureStore, unregister } from 'core'
import { GlobalStyles, theme } from 'styles'
import { config } from 'process'

const store = configureStore()

ReactDOM.render(
  // <> is also called React Fragment. you can use <Fragment> instead of <>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      {/* data-cy 'cy' is cypruss. it is usefull to use it 
    here so that you can see this name in inspect element 
    while debugging */}
      <Content data-cy="Content">
        <Title data-cy="Title">Sudoku</Title>
        <Card data-cy="Card">
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
