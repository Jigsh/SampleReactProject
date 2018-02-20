import reducer from './combineReducers'
import {createStore,compose} from 'redux';
import { logger } from 'redux-logger'
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


let middleware = applyMiddleware(logger,thunk);

const initialState = {
    user : {
        firstName : "Jignesh",
        lastName : "Tandel"
    }
}

const store = createStore(reducer,initialState,composeWithDevTools(middleware));

export default store;