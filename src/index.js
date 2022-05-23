import React from 'react'
import { createRoot } from 'react-dom/client';
import App from  './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </Provider>
)


