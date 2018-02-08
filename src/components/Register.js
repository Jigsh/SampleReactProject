import React from 'react';

import TextField from './TextField.js';

import Label from './Label.js';
import ComboBox from './Combobox.js';
import { connect } from 'react-redux'
import * as register from './../modules/actions/register'
import {bindActionCreators} from 'redux';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch, Redirect, withRouter
} from 'react-router-dom';



class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reigsterUser : {
                preferName : '',
                firstName : '',
                middleName : '',
                lastName : '',
                email : ''
            },
            register : false,
            preferName : ''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    registerClicked() {

         this.props.registerUser(this.state.reigsterUser).then( (isRegistered) =>{
          //   this.state.register = isRegistered;
             console.log(isRegistered)

         });
    }

    handleOnchange(name,value) {
       if(name === "firstName" || name === "preferName"){
           this.state.reigsterUser.preferName = value;
           this.state.preferName = value;
       }
       if(name === "firstName")
            this.state.reigsterUser.firstName = value;
        else if (name == "lastName")
           this.state.reigsterUser.lastName = value;
       else if (name == "gender")
           this.state.reigsterUser.gender = value;
        else if (name == "middleName")
           this.state.reigsterUser.middleName = value;
       else if (name == "emailAddress")
           this.state.reigsterUser.email = value;
      // console.log(this.state.reigsterUser.preferName +' *** '+ value);
    }

     validateText(value) {
         var regex = '[+-]?[^0-9]{0,15}$';
         regex = new RegExp(regex);
          if (regex.test(value)) {
            return true;
        }
        return false;

    }


    render() {
        return (
            <div className="main-login main-center dimensions-reg">
                <table>
                    <tbody>
                        <tr>
                            <td className="container-atos-logo-width">
                                <h2 className="color-atos-blue inline-display">
                                    <b>REGISTER</b>
                                </h2>
                                <br/><br/>
                            </td>
                            <td>
                                <img
                                    className="dimensions-logo-olympics inline-display"
                                    src="src/static/media/img/logo_tokyo.png"></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>


                </div>
                <div className="input-group">
                    <table>
                        <tbody>

                        <th>
                            <Label className="cols-sm-2 control-label reg-label-width field-required" name="First Name"/>
                        </th>
                        <th>
                            <Label className="cols-sm-2 control-label reg-label-width field-required" name="Gender"/>
                        </th>
                        </tbody>
                        <tr>
                    <td >
                        <TextField name="firstName" className="smalltextbox"  validate={this.validateText} changeName={this.handleOnchange} placeHolder="Enter your first Name"/>

                    </td>

                    <td >
                        <ComboBox name="gender" validate={this.validateText}  changeName={this.handleOnchange} options={this.options}/>

                    </td>
                        </tr>
                    </table>
                </div>
            <br/>

                <div className="input-group">
                    <table>
                        <tbody>
                        <th>
                            <Label className="cols-sm-2 control-label reg-label-width field-required"  name="Middle Name"/>

                        </th>
                        <th>
                            <Label className="cols-sm-2 control-label reg-label-width field-required" name="Confirm Email"/>

                        </th>
                        </tbody>
                        <tr>
                            <td>
                                <TextField name="middleName" validate={this.validateText} className="smalltextbox" changeName={this.handleOnchange} validateType="text" ref={middleName => this.middleName = middleName} placeHolder="Enter your middle Name"/>

                            </td>
                            <td>
                                <TextField name="emailAddress" validate={this.validateText} className="smalltextbox"  changeName={this.handleOnchange} placeHolder="Enter your email address"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <br/>

                <div className="input-group">

                    <table>
                        <tbody>
                        <th>
                            <Label className="cols-sm-2 control-label reg-label-width field-required"  name="Last Name"/>

                        </th>
                        <th>
                            <Label className="cols-sm-2 control-label reg-label-width field-required" name="ReConfirm Email"/>

                        </th>
                        </tbody>
                        <tr>
                            <td>
                                <TextField name="lastName" className="smalltextbox" validate={this.validateText} changeName={this.handleOnchange}  placeHolder="Enter your last Name"/>

                            </td>
                            <td>
                                <TextField name="confirmEmail" className="smalltextbox" validate={this.validateText} changeName={this.handleOnchange}  placeHolder="Reconfirm  email address"/>
                            </td>
                        </tr>
                    </table>

                </div>
                <br/>
                <div>
                    <Label className="cols-sm-2 control-label reg-label-width field-required"  name="Preffered Name"/>

                </div>
                <div className="input-group">

                    <TextField name="preferName"  ref="tip_txt_firstname" className="bigtextbox" validate={this.validateText} value={this.state.preferName}  changeName={this.handleOnchange} placeHolder="Enter your prefer Name"/>


                </div>


                <div className="padding-div-top">

                    <button
                        id="btn_reg"
                        type="button"
                        className="btn btn-primary btn-lg btn-block login-button"
                        onClick={() => this.registerClicked()}
                        >REGISTER</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td className="container-atos-logo-width align-text-center">
							{'Are you already registered? '}
                                <Link to="/login">Sign in</Link>
                            </td>
                            <td>
                                <img
                                    className="dimensions-reg-logo-atos padding-div-top"
                                    src="src/static/media/img/logo_atos.jpg"></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
const style = {
    margin: 15
};

const mapStateToProps = (state) => {
    return {

       registerObj: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(register,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(Register);
