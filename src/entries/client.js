// fix browser land
import 'babel-core/polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
// local imports
import routes from 'apps/frontend/routes'
import {createStore} from 'apps/frontend/store'


// styling imports
// normalize css
import 'normalize.css'
// allow for code highlighting
import 'assets/styles/highlight.css'


// use the browser's native history
const history = createBrowserHistory()

// grab the initial application state passed from the server
const initialState = window.__INITIAL_STATE__
// instantiate frontend store with initial application state
const store = createStore(initialState)

// render the routed application
ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('app')
)