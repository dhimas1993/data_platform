import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios'

function ForgotPassword(){
    const [Email, setEmail] = useState('')
    const [Data, setData] = useState('')

    const handleSubmit = async () => {
        if( Email !== '' ){
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(Email)) {
                alert("Please enter valid email address.")
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/forgetpassword`, {email : Email} )
                .then(res => {
                    console.log(res)
                    setData(res.data)
                    alert('Please Check your email to change your password')
                }).catch((err) => {
                    console.log(err.message)
                })
            } 
        } else {
            alert('Email cant be empty')
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
                            Can't Log in?
                        </div>
                        <div className="in-box-login-form">
                            {/* <!-- fullname --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">We'll send a recovery email to</h4>
                                <div className="i-input-form-login iemail">
                                    <input type="email" placeholder="Enter Email" onChange={({ target }) => setEmail(target.value)}/>
                                </div>
                            </div>
                            <br/>
                            {/* <!-- login --> */}
                            <div className="item-form-login-i">
                                <input onClick={() => handleSubmit()} type="submit" value="Send Recovery Link" className="submit-login-f"/>
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

export default ForgotPassword