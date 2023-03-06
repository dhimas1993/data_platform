import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import imgtab1 from '../../images/dealsourcing.png'
import imgtab2 from '../../images/signalling.png'
import imgtab3 from '../../images/investability.png'
import imgtab4 from '../../images/inreport.png'

class Whatinside extends Component {
    render() {
        return (
            <div>
                <div className="wrap-our-solution">
                    <h3 className="heading-title-our-solution">
                    See What's Inside
                    </h3>
                    <div className="wrap-tabs-content">
                        <Tab.Container id="tabs-our-solution" defaultActiveKey="tab1">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className="nav-item-tab-our-solution">
                                    <Nav.Link eventKey="tab1">Deal Sourcing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item-tab-our-solution">
                                    <Nav.Link eventKey="tab2">Signalling</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item-tab-our-solution">
                                    <Nav.Link eventKey="tab3">SID Investability <br/> Point</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item-tab-our-solution">
                                    <Nav.Link eventKey="tab4">Investability <br/> Report</Nav.Link>
                                </Nav.Item>
                                <div className="clear"></div>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="tab1">
                                    <div className="wrap-tab-our-solution">
                                        <div className="img-item-tab-our-solution">
                                            <img src={imgtab1} />
                                        </div>
                                        <div className="item-tab-our-solution-info-left">
                                            <h2 className="head-title-tab-item-our-solution">
                                                Find Investment
                                            </h2>
                                            <h4 className="subtitle-tab-item-our-solution">
                                                Assess your dealflow faster with our "decision making data points"
                                            </h4>
                                            <ul className="list-checklist-item-our-solution">
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">New weekly dealflow</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">30+ Industries and Sectors</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Access to 20+ Investable Data Points</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Access to 800+ early stage startups</h3>
                                                </li>
                                            </ul>
                                            <Link to="/login" className="bt-cta-header-home1">Try for Free</Link>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2">
                                    <div className="wrap-tab-our-solution">
                                        <div className="img-item-tab-our-solution">
                                            <img src={imgtab2} />
                                        </div>
                                        <div className="item-tab-our-solution-info-left">
                                            <h2 className="head-title-tab-item-our-solution">
                                                Signalling for Startups
                                            </h2>
                                            <h4 className="subtitle-tab-item-our-solution">
                                                Never miss out on the hottest deal and updates
                                            </h4>
                                            <ul className="list-checklist-item-our-solution">
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Startups fundraising meeting log</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Latest update on Startup traction and growth</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Latest trend on our startup databases</h3>
                                                </li>
                                            </ul>
                                            <Link to="" className="bt-cta-header-home1">Learn More</Link>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    <div className="wrap-tab-our-solution">
                                        <div className="img-item-tab-our-solution">
                                            <img src={imgtab3} />
                                        </div>
                                        <div className="item-tab-our-solution-info-left">
                                            <h2 className="head-title-tab-item-our-solution">
                                                Investability Scoring Index for Start up
                                            </h2>
                                            <h4 className="subtitle-tab-item-our-solution">
                                                SID point automatically scores the likelihood for startups to receive equity financing from VCs, PEs, or other non-bank financial provider.
                                            </h4>
                                            <ul className="list-checklist-item-our-solution">
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Rank Startup based on their SID Points</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Method derived from the metrics preferred by VC</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Data points powered by our machine learning algorithm</h3>
                                                </li>
                                            </ul>
                                            <Link to="" className="bt-cta-header-home1">Learn More</Link>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab4">
                                    <div className="wrap-tab-our-solution">
                                        <div className="img-item-tab-our-solution">
                                            <img src={imgtab4} />
                                        </div>
                                        <div className="item-tab-our-solution-info-left">
                                            <h2 className="head-title-tab-item-our-solution">
                                                Startup Visualized Report
                                            </h2>
                                            <h4 className="subtitle-tab-item-our-solution">
                                                Detailed and Visualized overview report of all startups in our database.
                                            </h4>
                                            <ul className="list-checklist-item-our-solution">
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Top Investable Companies every quarter</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Visualize Investment Memos Generator</h3>
                                                </li>
                                                <li className="item-list-check-our-solution">
                                                    <h3 className="title-name-our-solution">Customize Investment Memo Template</h3>
                                                </li>
                                            </ul>
                                            <Link to="" className="bt-cta-header-home1">Learn More</Link>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Whatinside