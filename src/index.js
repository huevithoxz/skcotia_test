import React from "react";
import  ReactDOM  from "react-dom/client"; 
import {Provider} from 'react-redux'; 
import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducers';
import App from './App'
/* 
estados inicial de redux + la store inicializada  */
const initialState = 
{
    people : [],
    tableList : [],
    back: false, 

    
}

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer,initialState,composeEnhacers(applyMiddleware()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
