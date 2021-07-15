import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios'

function ConfirmationPassword(props){
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')

    const id = props.match.params.id

    useEffect(() => {
        $(".show-password, .hide-password").on('click', function() {
            var passwordId1 = $(".iemail1 input");
            var passwordId2 = $(".iemail2 input");
            if ($(this).hasClass('show-password')) {
                $(passwordId1).attr("type", "text");
                $(this).parent().find(".show-password").hide();
                $(this).parent().find(".hide-password").show();
                $(passwordId2).attr("type", "text");
                $(this).parent().find(".show-password").hide();
                $(this).parent().find(".hide-password").show();
            } else {
                $(passwordId1).attr("type", "password");
                $(this).parent().find(".hide-password").hide();
                $(this).parent().find(".show-password").show();
                $(passwordId2).attr("type", "password");
                $(this).parent().find(".hide-password").hide();
                $(this).parent().find(".show-password").show();
            }
        });
    }, [])

    const handleSubmit = async () => {
        if(Password !== Confirm || Password === ''){
            alert(`password not match or can't be null`)
        } else {
            const data = {
                id : id,
                password : Password
            }

            await axios.post(`${process.env.REACT_APP_API_URL}/confirmationpassword`, data )
            .then(res => {
                console.log(res)
                alert('Success, Please Check your email to change your password')
            }).catch((err) => {
                alert(err.message)
            })
        }
    }

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
                            Reset Password
                        </div>
                        <div className="in-box-login-form">
                            {/* <!-- fullname --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">New Password</h4>
                                <div className="i-input-form-login iemail iemail1">
                                    <input type="password" placeholder="Enter password" onChange={({ target }) => setPassword(target.value)}/>
                                    <div className="bt-show-password-c">
                                        <span className="show-password">Show</span>
                                        <span className="hide-password">Hide</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Confirm Password</h4>
                                <div className="i-input-form-login iemail iemail2">
                                    <input type="password" placeholder="Enter password" onChange={({ target }) => setConfirm(target.value)}/>
                                    <div className="bt-show-password-c">
                                        <span className="show-password">Show</span>
                                        <span className="hide-password">Hide</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            {/* <!-- login --> */}
                            <div className="item-form-login-i">
                                <input onClick={() => handleSubmit()} type="submit" value="Submit" className="submit-login-f"/>
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

export default ConfirmationPassword