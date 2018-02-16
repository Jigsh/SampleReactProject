import React, {Component,PropTypes } from 'react';
import {Navbar, Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { connect} from 'react-redux';
var FontAwesome = require('react-fontawesome');
import {Popover, ButtonToolbar,OverlayTrigger,Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../Actions/LoginActions';
import {withRouter} from 'react-router-dom';


const style = {
    paddingLeft: '14px'
}

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPopOver:false
        }
        this.userLogout = this.userLogout.bind(this);
        this.showPopOverFn = this.showPopOverFn.bind(this);
    }
    componentWillMount() {
        console.log('NavBar:componentDidMount');
    }
    componentWillReceiveProps(props) {
        
        console.log('NavBar:componentWillReceiveProps');
    }
    userLogout() {
        console.log('userLogout');
        this.props.userLogout();
        this.props.history.push('/login');
    }
    showPopOverFn() {
        this.refs.overLay.show();
        //this.setState({showPopOver:true});
    }
    render() {
        const popoverBottom = (
            <Popover id="popover-trigger-click-root-close" title="My profile">
              <a className="popOverLink"><strong onClick={()=>this.userLogout()}>SignOut</strong> </a>
            </Popover>
        );
        return (
            <div>
            { this.props.loginObj.showNavbar ?
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span>Dashboard</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {/* <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                    </Nav> */}
                    <Nav pullRight>
                        {/* <NavItem eventKey={1} onClick={()=>this.userLogout()}> */}
                        <NavItem eventKey={1} onClick={()=>this.showPopOverFn()}>
                            
                            <ButtonToolbar>
                                <FontAwesome name="user" size="2x" className="nav-userIcon"/>
                                <OverlayTrigger ref="overLay" trigger="click" rootClose placement="bottom" overlay={popoverBottom}>
                                    <span className="userNamePadding">{this.props.loginObj.userName}</span>
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            :''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginObj:state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LoginActions,dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));