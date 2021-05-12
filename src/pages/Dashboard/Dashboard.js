import React, { Component } from 'react';
import SidebarMenu from '../../components/Dashboard/SidebarMenu';
import ContentDashboard from '../../components/Dashboard/ContentDashboard';
import SidebarTop from '../../components/Dashboard/SidebarTop';

class Dashboard extends Component {
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <SidebarMenu></SidebarMenu>
                <SidebarTop textmenupage="Database"></SidebarTop>
                <ContentDashboard></ContentDashboard>
            </div>
        )
    }
}
export default Dashboard