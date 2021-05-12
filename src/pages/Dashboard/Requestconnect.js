import React, { Component } from 'react';
import SidebarMenu from '../../components/Dashboard/SidebarMenu';
import ContentRequestconnect from '../../components/Dashboard/ContentRequestconnect';
import SidebarTop from '../../components/Dashboard/SidebarTop';

function Requestconnect() {
    return (
        <div>
            <SidebarMenu></SidebarMenu>
            <SidebarTop textmenupage="Request Connect"></SidebarTop>
            <ContentRequestconnect></ContentRequestconnect>
        </div>
    )
}

export default Requestconnect