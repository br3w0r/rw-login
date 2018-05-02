import React from 'react'
import {connect} from 'react-redux'
import * as Actions from '../Actions/main.js'
import { bindActionCreators } from 'redux'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.callback = this.callback.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.msgClear = this.msgClear.bind(this);
        this.keyHandler = this.keyHandler.bind(this);
    }
    callback(success, body={}) {
        if (success) {
            this.props.actions.loginHandler(body.token);
            window.location = window.origin;
        } else {
            errMsg.style.opacity = '1';
        }
    }
    msgClear() {
        errMsg.style.opacity = '0';
    }
    loginSubmit() {
        var creds = {
            username: login.value,
            password: password.value
        }
        this.props.actions.login(this.callback, creds);
    }
    keyHandler(e) {
        if (e.key == 'Enter') {
            this.loginSubmit();
        }
    }
    render() {
        return (
            <div id="loginForm" className="form left-bottom-angle">
                <div>Login:</div>
                <input type="text" id="login" onFocus={this.msgClear}
                    onKeyPress={this.keyHandler}/>
                <div>Password:</div>
                <input type="password" id="password" onFocus={this.msgClear}
                    onKeyPress={this.keyHandler}/>
                <div className="indent"></div>
                <input type="submit" id="loginBtn" value="Log In"
                    onClick={this.loginSubmit}/>
                <div className="indent"></div>
                <div className="text-center">
                    <a href="./forgot" className="ui-href">
                        Forgot password?
                    </a><br />
                    <a href="./signup" className="ui-href">Sign Up</a>
                </div>
            </div>)
    }
}

const dispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(null, dispatchToProps)(Login)
