import React from 'react';
import {login} from '../modules/actions/LoginActions';
import {getWeather} from '../modules/actions/weatheraction';
import {submitWeather} from "../modules/actions/weatheraction";
import {getCoOrdinate} from '../modules/actions/weatheraction';
import {getValue} from '../modules/actions/UtilActions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import WeatherReport from './WeatherReport';
import MapContainer from './MapContainer';

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
            weatherObj : {
                city : "",
                list : [{
                    date: "",
                    expectedTemp : "",
                    actualTemp : ""
                }],

            }
        }
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.showWeather = this.showWeather.bind(this);
        this.approveTemp = this.approveTemp.bind(this);
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
    }


    loginClicked(userName,password) {
        console.log(userName);
        if(userName && password) {
            Promise.resolve(this.props.login(userName,password)).then ((response)=> {
                console.log("Response " + response);

                this.setState({isLogin:response});


            })

        }
    }

    showWeather () {

        Promise.resolve(this.props.getWeather()).then((response) => {
            if(this.props.weather.weather){
                console.log("response" + this.props.weather.weather.cod);
                conosle.log("coordinate" + this.props.weather.weather.city.coord);
            }
        })
    }

    approveTemp () {

        //this.state.weatherObj.list[0].actualTemp = state.weather.actualTemp;
        var i=0;
        var weatherObj = {
            city: "",
            list: []
        }
        weatherObj.city = this.props.weather.weather.city.name;
        var weatherByDateTime =
        {
            date: "",
            expectedTemp: "",
            actualTemp: ""
        }
        var changeTemp = this.state.changeTemp;

        Promise.resolve(this.props.getValue()).then((response) => {
            console.log("Value" + this.props.getterMethods.setterMethods);
        });

        var actualTemp = this.props.getterMethods.setterMethods
        _.each(this.props.weather.weather.list,function(weathertemp){
            var weatherByDateTime =
                {
                    date: "",
                    expectedTemp: "",
                    actualTemp: ""
                }
            weatherByDateTime.date = weathertemp.dt_txt;
            weatherByDateTime.expectedTemp = weathertemp.main.temp;
           weatherByDateTime.actualTemp = actualTemp;
            weatherObj.list.push(weatherByDateTime);
            i = i+1
        })

        this.state.weatherObj = weatherObj;



        Promise.resolve(this.props.submitWeather(this.state.weatherObj)).then((response) =>{

            console.log("Weather Response :" + response);
        })

    }

    render(){
      const center = {
            lat:19.0760,
            leg:72.8777
      }

        const style = {
           width:'50%',
            hieght:'50%'
        }

        if(!this.state.isLogin){

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
        }else {
            return(<div>
                    <div>
                        <span>{this.state.userName} Login Successfully</span>
                    </div>
                    <br/>
                    <div>
                        <button onClick={ () => this.showWeather()}>Show Weather</button>

                    </div>
                    <div>
                        <table>
                            <td><WeatherReport  className="" city={this.props.weather.weather !=undefined ? this.props.weather.weather.city.name : ''} list={this.props.weather.weather !=undefined ? this.props.weather.weather.list : '' }/></td>
                            <td><MapContainer   style={style} cityCenter={this.props.weather.weather !=undefined && this.props.weather.weather != ''? this.props.weather.weather.city.coord : '' }/></td>

                        </table>

                    </div>
                    <div>
                        <button
                            id="btn_app"
                            type="button"
                            className="midiumtextbox"
                            onClick={() => this.approveTemp()}
                        >Approve</button>

                    </div>
                </div>

            );
        }
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
    return  bindActionCreators({login,getWeather,getCoOrdinate,submitWeather,getValue},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);