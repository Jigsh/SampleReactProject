import React,{Component} from 'react'
import { connect } from 'react-redux';
import { AlertComponent } from '../components/AlertComponent';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch, Redirect, withRouter
  } from 'react-router-dom';

import createLazyContainer from 'react-lazy-import';
const Loading = () => <div>Loading...</div>;
// const Error = () => <div>Error!</div>;
 
const Dashboard = createLazyContainer(() => import('./Dashboard'));
const Login = createLazyContainer(() => import('./Login'));
const NavBar = createLazyContainer(() => import('./NavBar'));



class App extends Component {
    constructor(props) {
        super(props);
        props.history.listen((location, done) => {
            //doSomething(location).then(done) 
            console.log('history change');
            console.log(location);
            console.log(done);
            // if(location.pathname == '/dashboard'){
            //     props.history.replace('/login');
            // }
        });
    }
    render() {
        console.log('App render');
        console.log(this.props);
        return(
            <div>
                <NavBar/>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Redirect from="/" to="/login" />
                    </Switch>
                {this.props.login.showAlert ? <AlertComponent message={this.props.login.alertMessage}/> : "" }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        login:state.login
    }
}

export default withRouter(connect(mapStateToProps)(App));