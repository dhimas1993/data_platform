import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import SidebarMenu from '../../components/Dashboard/SidebarMenu';
import ContentSidReport from '../../components/Dashboard/ContentSidReport';
import SidebarTop from '../../components/Dashboard/SidebarTop';

function SidReport(params) {
    const id = useSelector(state => state.Auth._id)
    const [User, setUser] = useState('')

    useEffect(() => {
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

    return (
        <div>
            <SidebarMenu></SidebarMenu>
            <SidebarTop textmenupage="SID Report"></SidebarTop>
            <ContentSidReport item={User.token}></ContentSidReport>
        </div>
    )
}

export default SidReport