import React from 'react';
import {login} from '../modules/actions/LoginActions';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


import GoogleMapReact from 'google-map-react';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch, Redirect, withRouter
} from 'react-router-dom';
const iconStyles = {

};
var FontAwesome = require('react-fontawesome');

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:"",
            isLogin: false,
            cityCenter : {lat : 22.2587,
                lng : 71.1924},
   
        }
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

        //this.hideAlert = this.clearForm.bind(this);
        console.log("Login");
    }

    onChange(e) {
        var change = {}
        change[e.target.name] = e.target.value
        console.log(change)
        this.hideAlert();
        this.setState(change);

    }
    hideAlert() {
        console.log('hideAlert');
        if(this.props.loginObj && this.props.loginObj.showAlert) {
            this.props.hideAlertBox();
        }
    }
    clearForm() {
        this.setState({userName:"",password:""});
    }
    componentWillReceiveProps(props) {
       /*
        console.log('component receive props');
        if(props.loginObj.loginSuccess) {
            //props.history.push('/dashboard');
            //this.props.navigateToUrl('/dashboard');
            this.props.showNavBar();
        } else if(!props.loginObj.loginSuccess){
            console.log('loginSuccess : false');
            this.clearForm();
        }
        */

       /* Promise.resolve(this.props.getValue()).then((response) => {
            console.log("Value" + this.props.getterMethods.setterMethods);
        });
        */
    }


    loginClicked(userName,password) {
        console.log(userName);
        if(userName && password) {
            Promise.resolve(this.props.login(userName,password)).then ((response)=> {
                console.log("Response " + response);

                this.setState({isLogin:response});
                this.props.history.push("/weather");

            })

        }
    }


    render(){
    

           return (
                <div className="backgroundImageLogin">
                    <div className="container">
                        <div className="card card-container">
                            <div className="loginLabel">
                                <span>Login</span>
                            </div>
                            <div>
                                <div className="row textField" >
                                    <div className="col-md-2 col-xs-2">
                                        <FontAwesome className="loginIcons" name='user' size='2x'/>
                                    </div>
                                    <div className="col-md-10 col-xs-10">
                                        <input name="userName" type="text" value={this.state.userName} onChange={this.onChange} id="userName" className="form-control" placeholder="Enter User Name" required autoFocus/>
                                    </div>
                                </div>
                                <div className="row textField">
                                    <div className="col-md-2 col-xs-2">
                                        <FontAwesome className="loginIcons" name='lock' size='2x'/>
                                    </div>
                                    <div className="col-md-10 col-xs-10">
                                        <input name="password" type="password" value={this.state.password} onChange={this.onChange} id="password" className="form-control" placeholder="Enter Password" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button onClick={()=>this.loginClicked(this.state.userName,this.state.password)}
                                                className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

    }
}
const mapStateToProps = (state) => {
    if(state.weather.weather)
    console.log("Weather :" + state.weather.weather.cod);
    return {
        getterMethods : state.getterMethods,
        weather:state.weather
    }
}


function mapDispatchToProps (dispatch)  {
    return  bindActionCreators({login},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);