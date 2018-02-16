import combineReducer from './reducers/LoginReducer';
// import { promise} from 'redux-promise-middleware';
import { createStore, applyMiddleware  } from 'redux';

import { logger } from 'redux-logger'
import thunk from 'redux-thunk';

let middleware = applyMiddleware(logger,thunk);

let AppStore = createStore(combineReducer, {}, middleware);

export default AppStore