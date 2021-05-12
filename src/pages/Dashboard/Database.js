import React, { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'
import {getUser} from '../../API/user_api'

import SidebarMenu from '../../components/Dashboard/SidebarMenu';
import ContentDataBase from '../../components/Dashboard/ContentDataBase';
import SidebarTop from '../../components/Dashboard/SidebarTop';

function Database(props) {
    const id = useSelector(state => state.Auth._id)

    return (
        <div>
            <SidebarMenu></SidebarMenu>
            <SidebarTop textmenupage="Database"></SidebarTop>
            <ContentDataBase></ContentDataBase>
        </div>
    )
}
export default Database