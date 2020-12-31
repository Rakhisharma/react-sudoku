import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from 'reducers'

const configureStore = (intialState = {}) => {
  const store = createStore(reducer, intialState, devToolsEnhancer({}))
  return store
}

export default configureStore
