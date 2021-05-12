import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'
import prover from '../../images/prover.png'
import $ from 'jquery';

import {Subscribe} from '../../API/user_api'


function SidebarMenu() {
    const id = useSelector(state => state.Auth._id)
    const [User, setUser] = useState('')

    useEffect(() => {
        $('.bar-menu-toogle-show-responsive').on("click", function (e) {
            e.preventDefault();
            $(".wrap-dashboard-sidebar-main-menu").addClass("wrap-dashboard-sidebar-main-menu-active");
            $(".bt-close-sidebar-menu-dashboard").addClass("bt-close-sidebar-menu-dashboard-active");
            $("body").addClass("body-menu-dasboard-active");
        });
        $('.bt-close-sidebar-menu-dashboard').on("click", function (e) {
            e.preventDefault();
            $(".wrap-dashboard-sidebar-main-menu").removeClass("wrap-dashboard-sidebar-main-menu-active");
            $(".bt-close-sidebar-menu-dashboard").removeClass("bt-close-sidebar-menu-dashboard-active");
            $("body").removeClass("body-menu-dasboard-active");
        });
        $('.main-menu-sidebar-dashboard-database li a').on("click", function () {
            $("body").removeClass("body-menu-dasboard-active");
        });
        if(id === ''){
            return true
        } else if(id !== ''){
            geUser(id)
        }
    }, [])

    const geUser = async (ID) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/getUser/`, { id : ID } )
        .then(res => {
            setUser(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const onHandleClick = () => {
        if(id){
            Swal.fire({
                title: 'Are you sure to subscribe ?',
                showDenyButton: true,
                confirmButtonText: `Subscribe`,
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Subscribe(id)
                } 
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            }).then((result) => {
                console.log(result)
            })
        }
    }

    const routes = window.location.pathname
    return (
        <div>
            {/* close menu mobile */}
            <div className="bt-close-sidebar-menu-dashboard">
                <i className="fa fa-close"></i>
            </div>
            <div className="wrap-dashboard-sidebar-main-menu">
                <div className="main-logo-dashboard-sidebar-menu">
                    <img src={Logo} alt=""/>
                </div>
                <div className="wrap-main-menu-sidebar-dashboard-database">
                    <ul className="main-menu-sidebar-dashboard-database">
                        {/* <li class={routes == "/dashboard"?"active":""}>
                            <Link to="/dashboard"><i className="fa fa-line-chart"></i> Dashboard</Link>
                        </li> */}
                        <li class={routes == "/database"?"active":""}>
                            <Link to="/database"><i className="fa fa-database"></i> Database</Link>
                        </li>
                        <li class={routes == "/sidreport"?"active":""}>
                            <Link to="/sidreport"><i className="fa fa-file-text"></i> SID Report</Link>
                        </li>
                        <li class={routes == "/requestconnect"?"active":""}>
                            <Link to="/requestconnect"><i className="fa fa-phone"></i> Request Connect</Link>
                        </li>
                    </ul>
                </div>
                {
                    User.token == "FREE" ?
                    <div className="box-upgrade-to-pro-ver">
                        <div className="img-icon-upgrade-to-pro-v">
                            <img src={prover} alt=""/>
                        </div>
                        <h3 className="title-upgrade-to-pro-v">
                            Upgrade to <span>PRO</span> for more feature
                        </h3>
                        <a onClick={() => onHandleClick()} className="bt-upgrade-to-pro-version" style={{"color" : "white"}}>
                            Upgrade
                        </a>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default SidebarMenu