import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/actions/auth'
import mixpanel from 'mixpanel-browser';

import Logo from '../../images/logosid.png'
import Logogoogle from '../../images/google.jpg'
import $ from 'jquery';

function Login (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const dispatch = useDispatch()
    const state = useSelector(state => state.Auth._id)

    const handleSubmit = (e) => {
        const data = {
            email : email,
            password : password
        }
        
        dispatch(loginUser( data ))
    };
    
    useEffect(() => {
        $(".show-password, .hide-password").on('click', function() {
            var passwordId = $(".ipassword input");
            if ($(this).hasClass('show-password')) {
                $(passwordId).attr("type", "text");
                $(this).parent().find(".show-password").hide();
                $(this).parent().find(".hide-password").show();
            } else {
                $(passwordId).attr("type", "password");
                $(this).parent().find(".hide-password").hide();
                $(this).parent().find(".show-password").show();
            }
        });
        mixpanel.init("a0fa51cd1c34fefd617384953be96c67");
        mixpanel.track("Video play", {"genre": "hip-hop", "duration in seconds": 42});
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, [])
    
    if(state !== ""){
        return <Redirect to='/' />
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
                            Login to <img src={Logo} alt=""/>
                        </div>
                        <div className="in-box-login-form">
                            {/* <!-- email --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Email <span>*</span></h4>
                                <div className="i-input-form-login iemail">
                                    <input type="text" placeholder="Enter Email" onChange={({ target }) => setEmail(target.value)}/>
                                </div>
                            </div>
                            {/* <!-- password --> */}
                            <div className="item-form-login-i">
                                <h4 className="form-input-login-desc">Choose Password <span>*</span></h4>
                                <div className="i-input-form-login ipassword">
                                    <input type="password" placeholder="Enter Password" onChange={({ target }) => setPassword(target.value)}/>
                                    <div className="bt-show-password-c">
                                        <span className="show-password">Show</span>
                                        <span className="hide-password">Hide</span>
                                    </div>
                                </div>
                                {/* <div className="cta-forgot-password">
                                    <Link to="/forgotpassword">Forgot Password ?</Link>
                                </div> */}
                            </div>
                            {/* <!-- login --> */}
                            <div className="item-form-login-i mt-4 mb-4">
                                <input onClick={() => handleSubmit()} type="submit" value="Login" className="submit-login-f"/>
                            </div>
                            {/* <div className="item-form-login-i">
                                <h3 className="text-or">OR</h3>
                            </div>
                            <div className="item-form-login-i">
                                <Link to="#" className="bt-login-with-google">
                                    <img src={Logogoogle} alt=""/> Continue with Google
                                </Link>
                            </div>
                            <div className="item-form-login-i">
                                <h3 className="text-cant-login">
                                    <Link to="/forgotpassword">Can't Login?</Link>
                                </h3>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
// class Login extends Component {
//     constructor(props) {
//         super(props);    
//         this.state = { 
            
//         };
//     }

//     componentDidMount() {
//         $(".show-password, .hide-password").on('click', function() {
// 		    var passwordId = $(".ipassword input");
// 		    if ($(this).hasClass('show-password')) {
// 		      $(passwordId).attr("type", "text");
// 		      $(this).parent().find(".show-password").hide();
// 		      $(this).parent().find(".hide-password").show();
// 		    } else {
// 		      $(passwordId).attr("type", "password");
// 		      $(this).parent().find(".hide-password").hide();
// 		      $(this).parent().find(".show-password").show();
// 		    }
// 		});
//     }

//     // action to redux
//     login = () => {
//         this.props.loginUser({
//             email : 'this.email.value',
//             password : 'this.password.value'
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="bg-login-page">
//                     {/* <img src="images/bglogin.png" alt="" /> */}
//                 </div>
//                 <div className="dont-have-account">
//                     <h3 className="title-donthaveaccount">Don't have account ? </h3>
//                     <Link to="/Signup" className="bt-signup-log">Signup</Link>
//                 </div>
                
//                 <div className="wrap-login-page">
//                     <div className="wrap-login-page-in">
//                         <div className="box-login-form">
//                             <div className="heading-title-login-form">
//                                 Login to <img src={Logo} alt=""/>
//                             </div>
//                             <div className="in-box-login-form">
//                                 {/* <!-- email --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Email <span>*</span></h4>
//                                     <div className="i-input-form-login iemail">
//                                         <input type="text" placeholder="Enter Email"/>
//                                     </div>
//                                 </div>
//                                 {/* <!-- password --> */}
//                                 <div className="item-form-login-i">
//                                     <h4 className="form-input-login-desc">Choose Password <span>*</span></h4>
//                                     <div className="i-input-form-login ipassword">
//                                         <input type="password" placeholder="Enter Password"/>
//                                         <div className="bt-show-password-c">
//                                             <span className="show-password">Show</span>
//                                             <span className="hide-password">Hide</span>
//                                         </div>
//                                     </div>
//                                     <div className="cta-forgot-password">
//                                         <Link to="/forgotpassword">Forgot Password ?</Link>
//                                     </div>
//                                 </div>
//                                 {/* <!-- login --> */}
//                                 <div className="item-form-login-i">
//                                     <input onClick={() => this.login()} type="submit" value="Login" className="submit-login-f"/>
//                                 </div>
//                                 <div className="item-form-login-i">
//                                     <h3 className="text-or">OR</h3>
//                                 </div>
//                                 <div className="item-form-login-i">
//                                     <Link to="#" className="bt-login-with-google">
//                                         <img src={Logogoogle} alt=""/> Continue with Google
//                                     </Link>
//                                 </div>
//                                 <div className="item-form-login-i">
//                                     <h3 className="text-cant-login">
//                                         <Link to="/forgotpassword">Can't Login?</Link>
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//              </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//       user : state
//     }
// }

// export default  connect(mapStateToProps, {loginUser})(Login)