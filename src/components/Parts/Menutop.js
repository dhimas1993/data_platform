import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/auth'
import Logo from '../../images/logo.png'
import $ from 'jquery';

class Menutop extends Component {
    constructor(props) {
        super(props)
        this._isMounted = false;
        this.state = {
            menuStyle: '',
            id: this.props.user.Auth._id
        };
    }
    componentDidMount() {
        this._isMounted = true;
        console.log(this.state.id)
        document.addEventListener('scroll', () => {
            if (this._isMounted) {
                if (window.scrollY > 20) {
                    this.setState({
                        menuStyle: 'wrap-menu-top wrap-menu-top-active'
                    })
                } else {
                    this.setState({
                        menuStyle: 'wrap-menu-top'
                    })
                }
            }
        });
        $('.main-menu-mobile ul li.menu-item-has-children a span').on("click", function (e) {
            e.preventDefault();
            $(this).parent().parent().find(">ul").slideToggle(300);
            this.classList.toggle("icon-change");
        });
    }
    
    componentWillUnmount() {
        this._isMounted = false;
        this.setState({id: this.props.user.Auth._id}) 
    }

    onButtonClick = () => {
        // Menghapus username dari redux state
        this.props.logoutUser()
    }

    render() {
        return (
            <div>
                <div className={this.state.menuStyle}>
                    <div className="container-menu-top">
                        {/* logo */}
                        <div className="logo-top">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        {/* main menu desktop */}
                        <div className="wrap-main-menu-desktop">
                            <ul className="main-menu-dekstop">
                             
                                <li className="bt-login-bt"><a target="_blank" href="https://api.whatsapp.com/send?phone=6281218990565&text=Hallo%20Startupindonesia%20Team">Contact Us</a></li>
                                {
                                    this.state.id !== "" 
                                    ? <li onClick={() => this.onButtonClick()} className="bt-try-for-free "><Link to="/login">Logout</Link></li>
                                    : <li className="bt-try-for-free"><Link to="/login">Login</Link></li>
                                }
                            </ul>
                        </div>
                        {/* menu bar mobile */}
                        <div className="wrap-burger-menu-mobile">
                            <i className="fa fa-bars bt-burgermenu" onClick={(e) => this.setState({ menuactive: !this.state.menuactive })}></i>
                        </div>
                    </div>
                </div>
                {/* menu mobile */}
                <div className={this.state.menuactive ? "wrap-menu-mobile wrap-menu-mobile-active" : "wrap-menu-mobile"}>
                    <div className="menu-wrap-mobile-active">
                        <div className="close-menu-mobile" onClick={(e) => this.setState({ menuactive: !this.state.menuactive })}>
                            <i className="fa fa-close bt-close-menu-mobile"></i>
                        </div>
                        <div className="main-menu-mobile">
                            <ul>
                             
                                <li className="custom-bt-mn-mob2 "><a target="_blank" href="https://api.whatsapp.com/send?phone=6281218990565&text=Hallo%20Startupindonesia%20Team">Contact Us</a></li>
                                {
                                    this.state.id !== "" 
                                    ? <li onClick={() => this.onButtonClick()} className="custom-bt-mn-mob"><Link to="/login">Logout</Link></li>
                                    : <li className="custom-bt-mn-mob"><Link to="/login">Login</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      user : state
    }
}
export default connect(mapStateToProps, {logoutUser})(Menutop)