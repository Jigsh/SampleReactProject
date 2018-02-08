import reducer from './registerReducer.js';
import {createStore,compose} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    user : {
        firstName : "Jignesh",
        lastName : "Tandel"
    }
}

const store = createStore(reducer,initialState,applyMiddleware(thunk));

export default store;