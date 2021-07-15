import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios'
import Sidreport from '../../images/sidreport.png'
import logosid from '../../images/lgsid.png'
import NotifUpgradePro from './NotifUpgradePro';
import NotifDisableContent from './NotifDisableContent';

import pdf from '../../images/StartupIndonesia Report - Q1 2021.pdf'
import Loading from '../../components/Parts/loading'

function ContentSidReport (props) {
    const id = useSelector(state => state.Auth._id)
    const [data, setData] = useState([])

    const getUser = async (ID) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/getUser`, {id : ID} )
        .then(res => {
            // console.log(res.data.subscribe.name)
            setData(res.data.subscribe.name)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        if(id === ''){
            return true
        } else if(id !== ''){
            getUser(id)
        }
    }, [id])

    const renderContent = () => {
        if(props.item === "FREE" ){
            return (
                <NotifUpgradePro></NotifUpgradePro>
            )
        } else if(props.item === "PRO"){
            return (
                <div className="wrap-content-tab-database-table">
                    <h3 className="heading-title-sid-report-page">
                        StartupIndonesia Report
                    </h3>
                    <div className="wrap-item-download-sid-report">
                        {/* item */}
                        <div className="item-download-sid-report-download">
                            <div className="item-download-sid-report-download-in">
                                <div className="item-download-sid-report-download-img">
                                    <img src={Sidreport} alt=""/>
                                </div>
                                <div className="item-download-sid-report-download-desc">
                                    <h3 className="title-item-report-down-desc">
                                        StartupIndonesia Top 15 Investability Points - Q1 2021
                                    </h3>
                                    <div className="item-download-sid-report-meta">
                                        <img src={logosid} alt=""/>
                                        <span className="item-do-meta-sid-report-by">
                                            StartupIndonesia
                                        </span>
                                        <div className="meta-time-sid-report">
                                            12h ago
                                        </div>
                                    </div>
                                    <a className="bt-download-sid-report-item-cta" href={pdf} download> Download </a>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if(props.item === "ENTERPRISE"){
            return (
                <NotifDisableContent></NotifDisableContent>
            )
        } else {
            return (
                <Loading></Loading>
            )
        }
    }
    
    return (
        <div className="wrap-dashboard-content-section-page">
            <div className="wrap-dashboard-content-section-page-in">
                
                    {renderContent()}
                    
            </div>
        </div>
    )
}
export default ContentSidReport