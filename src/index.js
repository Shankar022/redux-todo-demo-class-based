import React from 'react'
import ReactDOM from 'react-dom';
import {compose, createStore} from "redux";
import {Provider} from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)