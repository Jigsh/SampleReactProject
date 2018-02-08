import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch, Redirect, withRouter
} from 'react-router-dom';

import Register from './components/Register.js';
import { Provider } from 'react-redux';
import store from './modules/reducer/store.js'

const app = document.getElementById('app');
ReactDOM.render((
<Provider store={store}>
	<Router>
        <Switch>
            <Route exact path="/" />
            <Route exact path="/login" />
            <Route exact path="/reg" component={Register}/>
              <Route exact path="/forgot" />
              <Route exact path="/home" />

        </Switch>
	</Router>
</Provider>
), app)