import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
class ForgotPassword extends Component {
    componentDidMount() {
    }
    render() {

        return (
            <div>
                <div className="bg-login-page">
                    {/* <img src="images/bglogin.png" alt="" /> */}
                </div>
                <div className="dont-have-account">
                    <h3 className="title-donthaveaccount">Don't have account ? </h3>
                    <Link to="/Signup" className="bt-signup-log">Signup</Link>
                </div>
                
                <div className="wrap-login-page">
                    <div className="wrap-login-page-in">
                        <div className="box-login-form">
                            <div className="heading-title-login-form">
                                Can't Log in?
                            </div>
                            <div className="in-box-login-form">
                                {/* <!-- fullname --> */}
                                <div className="item-form-login-i">
                                    <h4 className="form-input-login-desc">We'll send a recovery email to</h4>
                                    <div className="i-input-form-login iemail">
                                        <input type="text" placeholder="Enter Email"/>
                                    </div>
                                </div>
                                <br/>
                                {/* <!-- login --> */}
                                <div className="item-form-login-i">
                                    <input type="submit" value="Send Recovery Link" className="submit-login-f"/>
                                </div>
                                <div className="link-return-login">
                                    <Link to="/login">Return to log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ForgotPassword