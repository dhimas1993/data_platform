import React, { Component } from 'react';
import SidebarMenu from '../../components/Dashboard/SidebarMenu';
import ContentSidReport from '../../components/Dashboard/ContentSidReport';
import SidebarTop from '../../components/Dashboard/SidebarTop';

function SidReport(params) {
    return (
        <div>
            <SidebarMenu></SidebarMenu>
            <SidebarTop textmenupage="SID Report"></SidebarTop>
            <ContentSidReport></ContentSidReport>
        </div>
    )
}

export default SidReport