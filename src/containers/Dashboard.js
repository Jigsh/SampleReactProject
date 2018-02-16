import React,{Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../Actions/LoginActions';


class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log('Dashboard: componentWillMount');
        var userName = localStorage.getItem('login_user_name');
        if(userName) {
            this.props.saveUserDetail(userName);
            if(!this.props.login.showNavbar) {
                this.props.showNavBar();
            }
        } else {
            this.props.history.push('/login');
        }
    }
    componentWillReceiveProps(props){
        console.log('Dashboard: componentWillReceiveProps');
        console.log(props);
    }
    render() {
        return(
            <div className="backgroundImageDashboard">
                <div className="dashboardText">
                Welcome to Dashboard User:- {this.props.loginObj.userName}
                </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);