import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'

import reducers from './reducers'
import App from './App'

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(ReduxPromise),
    autoRehydrate()
  )
)

// begin periodically persisting the store
persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
