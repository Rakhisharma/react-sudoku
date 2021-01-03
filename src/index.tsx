import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, NewButton, Numbers, Title } from 'components'
import { configureStore, register } from 'core'
import { GlobalStyles, theme } from 'styles'

const { persistor, store } = configureStore()

ReactDOM.render(
  /*<> is also called React Fragment. you can use <Fragment> instead of <>*/
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* data-cy 'cy' is cypruss. it is usefull to use it here so that you can
        see this name in inspect element while debugging  */}
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

register()
