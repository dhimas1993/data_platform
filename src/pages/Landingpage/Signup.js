import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Register} from '../../API/user_api'
import Logo from '../../images/logosid.png'
import Logogoogle from '../../images/google.jpg'
import $ from 'jquery';

function Signup() {
    const [Name, setName] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [JobPosition, setJobPosition] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [C_password, setC_password] = useState('')

    useEffect(() => {
        $(".show-password1, .hide-password1").on('click', function() {
            var passwordId = $(".ipassword1 input");
            if ($(this).hasClass('show-password1')) {
                $(passwordId).attr("type", "text");
                $(this).parent().find(".show-password1").hide();
                $(this).parent().find(".hide-password1").show();
            } else {
                $(passwordId).attr("type", "password");
                $(this).parent().find(".hide-password1").hide();
                $(this).parent().find(".show-password1").show();
            }
        });
        $(".show-password2, .hide-password2").on('click', function() {
            var passwordId = $(".ipassword2 input");
            if ($(this).hasClass('show-password2')) {
                $(passwordId).attr("type", "text");
                $(this).parent().find(".show-password2").hide();
                $(this).parent().find(".hide-password2").show();
            } else {
                $(passwordId).attr("type", "password");
                $(this).parent().find(".hide-password2").hide();
                $(this).parent().find(".show-password2").show();
            }
        });

        // confirm password
        function checkPasswordMatch() {
            var password = $("#txtNewPassword").val();
            var confirmPassword = $("#txtConfirmPassword").val();
            if (password != confirmPassword) {
                $("#CheckPasswordMatch").html("Passwords does not match!");
                $('.bt-submit-login-box').attr('disabled', 'disabled');
                $('.bt-submit-login-box').addClass('bt-post-status-send-disable');
            } else {
                $("#CheckPasswordMatch").html("");
                $('.bt-submit-login-box').removeAttr('disabled');
                $('.bt-submit-login-box').removeClass('bt-post-status-send-disable');
            }
        }
        $(document).ready(function () {
            $("#txtConfirmPassword").keyup(checkPasswordMatch);
        });
    }, [])

    const onHandleSignUp = async () => {
        if(Password === C_password){
            if(Name !== '' || CompanyName !== '' || JobPosition !== '' || Email !== '' || Password !== ''){
                let data = {
                    name : Name,
                    companyName : CompanyName,
                    jobPosition : JobPosition,
                    email: Email,
                    password: Password,
                }
                Register(data)
            } else {
                alert("mohon lengkapi field dengan benar")
            }
        } else {
            alert("Password dan Confirm Password Tidak Cocok")
        }
    }

    return (
        <div>
            <div className="bg-login-page">
                {/* <img src="images/bglogin.png" alt="" /> */}
            </div>
            <div className="dont-have-account">
                <h3 className="title-donthaveaccount">have account ? </h3>
                <Link to="/login" className="bt-signup-log">Login</Link>
            </div>
            
            <div className="wrap-login-page">
                <div className="wrap-login-page-in">
                    <div className="box-login-form">
                        <div className="heading-title-login-form">
                            Sign Up Now
                        </div>
                        <div className="in-box-login-form">
                            {/* <!-- fullname --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Full Name <span>*</span></h4>
                                <div className="i-input-form-login iuser">
                                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Insert Full Name"/>
                                </div>
                            </div>
                            {/* <!-- fullname --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Company Name</h4>
                                <div className="i-input-form-login icompany">
                                    <input onChange={e => setCompanyName(e.target.value)} type="text" placeholder="Insert Full Name"/>
                                </div>
                            </div>
                            {/* <!-- fullname --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Job Position</h4>
                                <div className="i-input-form-login ijobpos">
                                    <input onChange={e => setJobPosition(e.target.value)} type="text" placeholder="Insert Full Name"/>
                                </div>
                            </div>
                            {/* <!-- email --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Email <span>*</span></h4>
                                <div className="i-input-form-login iemail">
                                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Insert Email"/>
                                </div>
                            </div>
                            {/* <!-- password --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Password <span>*</span></h4>
                                <div className="i-input-form-login ipassword ipassword1">
                                    <input onChange={e => setPassword(e.target.value)} type="password" id="txtNewPassword"placeholder="Insert Password"/>
                                    <div className="bt-show-password-c">
                                        <span className="show-password show-password1">Show</span>
                                        <span className="hide-password hide-password1">Hide</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- confirm password --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Confirm Password <span>*</span></h4>
                                <div className="i-input-form-login ipassword ipassword2">
                                    <input onChange={e => setC_password(e.target.value)} type="password" id="txtConfirmPassword" placeholder="Insert Password"/>
                                    <div className="bt-show-password-c">
                                        <span className="show-password show-password2 ">Show</span>
                                        <span className="hide-password hide-password2">Hide</span>
                                    </div>
                                </div>
                                <div class="registrationFormAlert" id="CheckPasswordMatch"></div>
                            </div>
                            <br/>
                            {/* <!-- login --> */}
                            <div className="item-form-login-i">
                                <input onClick={onHandleSignUp} type="submit" value="Sign Up Now" className="submit-login-f"/>
                            </div>
                            <div className="item-form-login-i">
                                <h3 className="text-or">OR</h3>
                            </div>
                            <div className="item-form-login-i">
                                <Link to="#" className="bt-login-with-google">
                                    <img src={Logogoogle} alt=""/> Continue with Google
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

// class Signup extends Component {
//     componentDidMount() {
//         $(".show-password1, .hide-password1").on('click', function() {
// 		    var passwordId = $(".ipassword1 input");
// 		    if ($(this).hasClass('show-password1')) {
// 		      $(passwordId).attr("type", "text");
// 		      $(this).parent().find(".show-password1").hide();
// 		      $(this).parent().find(".hide-password1").show();
// 		    } else {
// 		      $(passwordId).attr("type", "password");
// 		      $(this).parent().find(".hide-password1").hide();
// 		      $(this).parent().find(".show-password1").show();
// 		    }
// 		});
//         $(".show-password2, .hide-password2").on('click', function() {
// 		    var passwordId = $(".ipassword2 input");
// 		    if ($(this).hasClass('show-password2')) {
// 		      $(passwordId).attr("type", "text");
// 		      $(this).parent().find(".show-password2").hide();
// 		      $(this).parent().find(".hide-password2").show();
// 		    } else {
// 		      $(passwordId).attr("type", "password");
// 		      $(this).parent().find(".hide-password2").hide();
// 		      $(this).parent().find(".show-password2").show();
// 		    }
// 		});

//         // confirm password
//         function checkPasswordMatch() {
//             var password = $("#txtNewPassword").val();
//             var confirmPassword = $("#txtConfirmPassword").val();
//             if (password != confirmPassword) {
//                 $("#CheckPasswordMatch").html("Passwords does not match!");
//                 $('.bt-submit-login-box').attr('disabled', 'disabled');
//                 $('.bt-submit-login-box').addClass('bt-post-status-send-disable');
//             } else {
//                 $("#CheckPasswordMatch").html("");
//                 $('.bt-submit-login-box').removeAttr('disabled');
//                 $('.bt-submit-login-box').removeClass('bt-post-status-send-disable');
//             }
//         }
//         $(document).ready(function () {
//             $("#txtConfirmPassword").keyup(checkPasswordMatch);
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <div className="bg-login-page">
//                     {/* <img src="images/bglogin.png" alt="" /> */}
//                 </div>
//                 <div className="dont-have-account">
//                     <h3 className="title-donthaveaccount">have account ? </h3>
//                     <Link to="/login" className="bt-signup-log">Login</Link>
//                 </div>
                
//                 <div className="wrap-login-page">
//                     <div className="wrap-login-page-in">
//                         <div className="box-login-form">
//                             <div className="heading-title-login-form">
//                                 Sign Up Now
//                             </div>
//                             <div className="in-box-login-form">
//                                 {/* <!-- fullname --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Full Name <span>*</span></h4>
//                                     <div className="i-input-form-login iuser">
//                                         <input type="text" placeholder="Insert Full Name"/>
//                                     </div>
//                                 </div>
//                                 {/* <!-- fullname --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Company Name</h4>
//                                     <div className="i-input-form-login icompany">
//                                         <input type="text" placeholder="Insert Full Name"/>
//                                     </div>
//                                 </div>
//                                 {/* <!-- fullname --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Job Position</h4>
//                                     <div className="i-input-form-login ijobpos">
//                                         <input type="text" placeholder="Insert Full Name"/>
//                                     </div>
//                                 </div>
//                                 {/* <!-- email --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Email <span>*</span></h4>
//                                     <div className="i-input-form-login iemail">
//                                         <input type="text" placeholder="Insert Email"/>
//                                     </div>
//                                 </div>
//                                 {/* <!-- password --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Password <span>*</span></h4>
//                                     <div className="i-input-form-login ipassword ipassword1">
//                                         <input type="password" id="txtNewPassword"placeholder="Insert Password"/>
//                                         <div className="bt-show-password-c">
//                                             <span className="show-password show-password1">Show</span>
//                                             <span className="hide-password hide-password1">Hide</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <!-- confirm password --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Confirm Password <span>*</span></h4>
//                                     <div className="i-input-form-login ipassword ipassword2">
//                                         <input type="password" id="txtConfirmPassword" placeholder="Insert Password"/>
//                                         <div className="bt-show-password-c">
//                                             <span className="show-password show-password2 ">Show</span>
//                                             <span className="hide-password hide-password2">Hide</span>
//                                         </div>
//                                     </div>
//                                     <div class="registrationFormAlert" id="CheckPasswordMatch"></div>
//                                 </div>
//                                 <br/>
//                                 {/* <!-- login --> */}
//                                 <div className="item-form-login-i">
//                                     <input type="submit" value="Sign Up Now" className="submit-login-f"/>
//                                 </div>
//                                 <div className="item-form-login-i">
//                                     <h3 className="text-or">OR</h3>
//                                 </div>
//                                 <div className="item-form-login-i">
//                                     <Link to="#" className="bt-login-with-google">
//                                         <img src={Logogoogle} alt=""/> Continue with Google
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Signup