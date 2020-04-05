import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
  return store
}

export const store = configureStore()
