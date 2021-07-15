import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {logoutUser} from '../../store/actions/auth'

function SidebarTop(props) {
    const id = useSelector(state => state.Auth._id)
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(id === ''){
            return true
        } else if(id !== ''){
            geUser(id)
        }
    }, [id])

    const geUser = async (ID) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/getUser/`, { id : ID } )
        .then(res => {
            setUser(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const onButtonClick = async () => {
       await dispatch(logoutUser)
    }
    
    return (
        <div>
            <div className="wrap-sidebar-top-dashboard-menu-page">
                <div className="wrap-sidebar-top-dashboard-menu-page-in">
                    <div className="bar-menu-toogle-show-responsive">
                        <i className="fa fa-bars"></i>
                    </div>
                    <h3 className="title-dashboard-meta-top-sidebar">
                        {props.textmenupage}
                    </h3>
                    <div className="profile-section-top-bar-dashboard">
                        {/* <div className="img-profile-user-dashboard-table">
                            <img src={avatar} alt=""/>
                        </div> */}
                        <div className="user-name-profile-dasboard-table">
                           Hi, { id !== "" ? user.name : null }
                        </div>
                        <Link onClick={() => onButtonClick()} className="signout-bt-dash"><i className="fa fa-power-off"></i> <span class="text-signout-bt">Sign Out</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarTop