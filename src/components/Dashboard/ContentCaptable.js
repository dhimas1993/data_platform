import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useSelector} from 'react-redux'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import parse from 'html-react-parser';

import NotifUpgradePro from './NotifUpgradePro';
import Loading from '../../components/Parts/loading'

function ContentDataBase(props){
    const id = useSelector(state => state.Auth._id)
    const [data, setData] = useState([])

    // console.log(id)
    const getDatabase = async (ID) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/captable`, {id : ID} )
        // await axios.post(`http://localhost:5001/v1/users/captable`, {id : ID} )
        .then(res => {
            console.log(res)
            setData(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        if(id === ''){
            return true
        } else if(id !== ''){
            getDatabase(id)
        }
    }, [id])

    const renderContent = () => {
        if(props.item === "FREE"){
            return (
                <NotifUpgradePro></NotifUpgradePro>
            )
        } else {
            return (
                <Loading></Loading>
            )
        }
    }
    
    return (
        <div>
            <div className="wrap-dashboard-content-section-page">
                <div className="wrap-dashboard-content-section-page-in">
                    {/* pro plan section */}
                    {/* <NotifUpgradePro></NotifUpgradePro> */}
                    {/* tab table */}
                    {
                        data[0] !== undefined ?
                            <div className="wrap-content-tab-database-table">
                                <Tab.Container id="tabs-our-solution" defaultActiveKey={0}>
                                    <Nav variant="pills" className="flex-column">
                                        {
                                            data.map((item, key) => {
                                                return (
                                                    <Nav.Item className="nav-item-tab-database-tab">
                                                        <Nav.Link eventKey={key}>{item.name}</Nav.Link>
                                                    </Nav.Item>

                                                )
                                            })
                                        }
                                        <div className="clear"></div>
                                    </Nav>
                                    <Tab.Content>
                                        {
                                            data.map((item, key) => {
                                                return ( 
                                                    <Tab.Pane eventKey={key}>
                                                        <div className="wrap-tab-database-data-table wrap-tab-database-data-table-iframe">
                                                            {parse(item.link)}
                                                        </div>
                                                    </Tab.Pane>
                                                )
                                            })
                                        }
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        : renderContent()
                    }
                </div>
            </div>
        </div>
    )
}

export default ContentDataBase
