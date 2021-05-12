import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'
import Logobubu from '../../images/logobubu.png'
import part1 from '../../images/GDP@2x.png'
import part2 from '../../images/Logo Amvesindo@2x.png'
import part3 from '../../images/Logo Ristek@2x.png'
import part4 from '../../images/Logo SVATA_1@2x.png'
import part5 from '../../images/Logo DS@2x.png'
import part6 from '../../images/ASES_1@2x.png'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="wrap-main-footer">
                    <div className="main-footer-top">
                        <Row>
                            <Col lg={3}>
                                <div className="wrap-logo-footer-s">
                                    <div className="logo-footer-1">
                                        <img src={Logo} alt="" />
                                    </div>
                                    <div className="logo-footer-2">
                                        <h4>Powered by</h4>
                                        <img src={Logobubu} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="wrap-item-link-footer">
                                    <h4 className="head-title-link-footer">
                                        Services
                                    </h4>
                                    <ul className="item-link-footer">
                                        <li>
                                            <Link to="/">PitchUp</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Bootcamp</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Community</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Mentoring</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Startup Perks</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Pitchdeck Consultation</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="wrap-item-link-footer">
                                    <h4 className="head-title-link-footer">
                                        Company
                                    </h4>
                                    <ul className="item-link-footer">
                                        <li>
                                            <Link to="/">About Startupindonesia</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Events</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="wrap-all-item-logo-partnership-footer">
                                    {/* item */}
                                    <div className="wrap-item-logo-partnership">
                                        <h4 className="head-title-link-footer">
                                            Honorable Partners
                                        </h4>
                                        <div className="item-logo-partnership">
                                            <img src={part1} alt="" />
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="wrap-item-logo-partnership">
                                        <h4 className="head-title-link-footer">
                                            Partners
                                        </h4>
                                        <div className="item-logo-partnership">
                                            <img src={part2} alt="" />
                                        </div>
                                        <div className="item-logo-partnership">
                                            <img src={part3} alt="" />
                                        </div>
                                        <div className="item-logo-partnership">
                                            <img src={part4} alt="" />
                                        </div>
                                        <div className="item-logo-partnership">
                                            <img src={part5} alt="" />
                                        </div>
                                        <div className="item-logo-partnership">
                                            <img src={part6} alt="" />
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="wrap-item-logo-partnership">
                                        <h4 className="head-title-link-footer">
                                            Media Partners
                                        </h4>
                                        <div className="item-logo-partnership">
                                            <img src={part2} alt="" />
                                        </div>
                                        <div className="item-logo-partnership">
                                            <img src={part3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="main-footer-bot">
                        <ul className="social-media-footer">
                            <li>
                                <Link to="/"><i className="i fa fa-instagram"></i></Link>
                                <Link to="/"><i className="i fa fa-linkedin"></i></Link>
                                <Link to="/"><i className="i fa fa-spotify"></i></Link>
                                <Link to="/"><i className="i fa fa-slack"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default Footer