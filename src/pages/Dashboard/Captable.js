import React, { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'
import {getUser} from '../../API/user_api'

import SidebarMenu from '../../components/Dashboard/SidebarMenu';
import ContentCaptable from '../../components/Dashboard/ContentCaptable';
import SidebarTop from '../../components/Dashboard/SidebarTop';

function Captable(props) {
    const id = useSelector(state => state.Auth._id)

    return (
        <div>
            <SidebarMenu></SidebarMenu>
            <SidebarTop textmenupage="Captable"></SidebarTop>
            <ContentCaptable></ContentCaptable>
        </div>
    )
}
export default Captable