import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'

const myStore = createStore(allReducers);

ReactDOM.render(
        <Provider store={myStore}>
        <App />
        </Provider>
       , document.getElementById('root'));
