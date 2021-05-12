import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logosid from '../../images/logo.png'
import morph from '../../images/morphicon.png'
import karyakarsa from '../../images/karyakarsaicon.png'
import citcall from '../../images/citcallicon.png'
import ibunda from '../../images/ibundaicon.png'
import ml1 from '../../images/ml1.png'
import ml2 from '../../images/ml2.png'
import ml3 from '../../images/ml3.png'
import ml4 from '../../images/ml4.png'
import ml5 from '../../images/ml5.png'
import ml6 from '../../images/ml6.png'

class ContentDashboard extends Component {
    render() {
        return (
            <div>
                <div className="wrap-dashboard-content-section-page">
                    <div className="wrap-dashboard-content-section-page-in">
                        <Row>
                            <Col lg={7}>
                                <div className="wrap-dashboard-content-page-this-week">
                                    <h3 className="title-dashboard-content-pg-head">
                                        This Week on <img src={Logosid} alt=""/>
                                    </h3>
                                    <div className="wrap-item-dashboard-page-this-week">
                                        {/* item */}
                                        <div className="item-dashboard-page-this-week">
                                            <div className="i-dashboard-pg-list-img">
                                                <img src={morph} alt=""/>
                                            </div>
                                            <div className="i-dashboard-pg-list-desc">
                                                <h3 className="head-title-desc-list-item-dash">
                                                    Morph
                                                </h3>
                                                <h4 className="head-title-desc-list-item-dash2">
                                                    Morph is an indonesian E-sports team. The team currently specializes in 3 gaming divisions which are mobile games, console games, and PC Games.
                                                </h4>
                                            </div>
                                            <div className="i-dashboard-pg-list-point">
                                                <h3 className="sid-point-title">
                                                    SID Point
                                                </h3>
                                                <h2 className="sid-point-title2">
                                                    4.12
                                                </h2>
                                            </div>
                                            <div className="i-dashboard-pg-list-button">
                                                <Link to="#" className="bt-connect-bt-list-button-dash">Connect</Link>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="item-dashboard-page-this-week">
                                            <div className="i-dashboard-pg-list-img">
                                                <img src={karyakarsa} alt=""/>
                                            </div>
                                            <div className="i-dashboard-pg-list-desc">
                                                <h3 className="head-title-desc-list-item-dash">
                                                    Karyakarsa
                                                </h3>
                                                <h4 className="head-title-desc-list-item-dash2">
                                                Content creators are the key stakeholder in any UGC or social media platforms. However, they lack monetization options from these platforms. 
                                                </h4>
                                            </div>
                                            <div className="i-dashboard-pg-list-point">
                                                <h3 className="sid-point-title">
                                                    SID Point
                                                </h3>
                                                <h2 className="sid-point-title2">
                                                    3.51
                                                </h2>
                                            </div>
                                            <div className="i-dashboard-pg-list-button">
                                                <Link to="#" className="bt-connect-bt-list-button-dash">Connect</Link>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="item-dashboard-page-this-week">
                                            <div className="i-dashboard-pg-list-img">
                                                <img src={citcall} alt=""/>
                                            </div>
                                            <div className="i-dashboard-pg-list-desc">
                                                <h3 className="head-title-desc-list-item-dash">
                                                    Citcall
                                                </h3>
                                                <h4 className="head-title-desc-list-item-dash2">
                                                    Citcall is a seamless verification process by creating cheaper & more reliable verification alternative 
                                                </h4>
                                            </div>
                                            <div className="i-dashboard-pg-list-point">
                                                <h3 className="sid-point-title">
                                                    SID Point
                                                </h3>
                                                <h2 className="sid-point-title2">
                                                    4.47
                                                </h2>
                                            </div>
                                            <div className="i-dashboard-pg-list-button">
                                                <Link to="#" className="bt-connect-bt-list-button-dash">Connect</Link>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="item-dashboard-page-this-week">
                                            <div className="i-dashboard-pg-list-img">
                                                <img src={ibunda} alt=""/>
                                            </div>
                                            <div className="i-dashboard-pg-list-desc">
                                                <h3 className="head-title-desc-list-item-dash">
                                                    Ibunda
                                                </h3>
                                                <h4 className="head-title-desc-list-item-dash2">
                                                    Ibunda.id provides online counseling with real mental health practitioner 
                                                </h4>
                                            </div>
                                            <div className="i-dashboard-pg-list-point">
                                                <h3 className="sid-point-title">
                                                    SID Point
                                                </h3>
                                                <h2 className="sid-point-title2">
                                                    3.58
                                                </h2>
                                            </div>
                                            <div className="i-dashboard-pg-list-button">
                                                <Link to="#" className="bt-connect-bt-list-button-dash">Connect</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="wrap-dashboard-content-page-meeting-log">
                                    <h3 className="title-dashboard-content-pg-head">
                                        Meeting Log
                                    </h3>
                                    <div className="box-meeting-log-content-section">
                                        <h3 className="heading-title-box-meeting-log-c-sec-1">
                                            Startup Alert
                                        </h3>
                                        {/* item */}
                                        <div className="item-list-box-meeting-log-content-s">
                                            <div className="item-list-box-meeting-log-content-s-logo">
                                                <div className="img-item-list-box-meeting-log-c-s-logo">
                                                    <img src={ml1} alt=""/>
                                                </div>
                                                <div className="img-item-list-box-meeting-log-c-s-logo">
                                                    <img src={ml2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="item-list-box-meeting-log-content-s-text">
                                                <span>Morph</span> got a 2nd call meeting with <span>GDP Venture</span>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="item-list-box-meeting-log-content-s">
                                            <div className="item-list-box-meeting-log-content-s-logo">
                                                <div className="img-item-list-box-meeting-log-c-s-logo">
                                                    <img src={ml3} alt=""/>
                                                </div>
                                                <div className="img-item-list-box-meeting-log-c-s-logo">
                                                    <img src={ml4} alt=""/>
                                                </div>
                                            </div>
                                            <div className="item-list-box-meeting-log-content-s-text">
                                                <span>Citcall</span> got a 2nd call meeting with <span>Kejora</span>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="item-list-box-meeting-log-content-s">
                                            <div className="item-list-box-meeting-log-content-s-logo">
                                                <div className="img-item-list-box-meeting-log-c-s-logo">
                                                    <img src={ml5} alt=""/>
                                                </div>
                                                <div className="img-item-list-box-meeting-log-c-s-logo">
                                                    <img src={ml6} alt=""/>
                                                </div>
                                            </div>
                                            <div className="item-list-box-meeting-log-content-s-text">
                                                <span>Ibunda</span> got a 2nd call meeting with <span>Mandiri Capital</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

}
export default ContentDashboard