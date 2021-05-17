import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import {useSelector, useDispatch} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../images/logo.png'

import {Subscribe} from '../../API/user_api'

function BoxPricing() {
    const id = useSelector(state => state.Auth._id)

    const onHandleClick = () => {
        if(id){
            Swal.fire({
                title: 'Are you sure to subscribe ?',
                showDenyButton: true,
                confirmButtonText: `Subscribe`,
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Subscribe(id)
                } 
            })
        } else {
            Swal.fire({
                title: 'You need to sign in to subscribe',
                showDenyButton: true,
                confirmButtonText: `Login`,
                denyButtonText: `Cancel`,
            }).then((result) => {
                console.log(result.isConfirmed)
                if(result.isConfirmed){
                    window.location.replace(`${process.env.REACT_APP_WEB_URL}/login`)
                }
            })
        }
    }

    return (
        <div>
            <div className="wrap-box-pricing-tab">
                <div className="wrap-heading-title-box-pricing-tb">
                    <h2 className="heading-title-box-pricing-tb">
                        Try <img src={Logo} alt=""/> now for free. 
                    </h2>
                </div>
                <div className="wrap-item-box-pricing-pg">
                    {/* item */}
                    <div className="item-box-pricing-pg">
                        <h3 className="heading-title-box-price-tag-pg">
                            Free
                        </h3>
                        <h4 className="heading-title-box-price-tag-pg2">
                            
                        </h4>
                        <div className="tab-item-box-pricing-number-p">
                            <div className="item-pricing-box-number-p1">Rp 0</div>
                            <div className="item-pricing-box-number-p2">/ month</div>
                            <div className="item-pricing-box-number-p3"></div>
                        </div>
                        <Link to="/login" className="bt-bt-cta-pricing-tb">Try for Free</Link>
                        <div className="title-info-pricing-benefits"></div>
                        <div className="wrap-list-benefits-pricing-table">
                            <ul className="list-benefits-pricing-table">
                                <li>Access to 5 new Startups per week</li>
                                <li>Limited Data Points</li>
                                <li>Access to SID Investability Points</li>
                            </ul>
                        </div>
                        <div className="wrap-learn-more-bt-table-pricing"></div>
                    </div>
                    {/* item */}
                    <div className="item-box-pricing-pg">
                        <h3 className="heading-title-box-price-tag-pg">
                            Pro
                        </h3>
                        <h4 className="heading-title-box-price-tag-pg2">
                            Capture opportunities with exclusive data points.
                        </h4>
                        <div className="tab-item-box-pricing-number-p">
                            <div className="item-pricing-box-number-p1">Rp 1.500.000</div>
                            <div className="item-pricing-box-number-p2">/ month</div>
                            <div className="item-pricing-box-number-p3">(paid quarterly)</div>
                        </div>
                        <a onClick={() => onHandleClick()}  className="bt-bt-cta-pricing-tb" style={{color: 'white'}}>Get Started</a>
                        <div className="title-info-pricing-benefits"></div>
                        <div className="wrap-list-benefits-pricing-table">
                            <ul className="list-benefits-pricing-table">
                                <li>Early Access to new deal flows per month</li>
                                <li>All-access to our Startup database</li>
                                <li>Unlimited access to all Data Points (Traction, Contact Founder, Meeting Log, Etc)</li>
                                <li>Access to SID Investability Points</li>
                                <li>Automatically generate Investment Memos</li>
                            </ul>
                        </div>
                        <div className="wrap-learn-more-bt-table-pricing"></div>
                    </div>
                    {/* item */}
                    <div className="item-box-pricing-pg">
                        <h3 className="heading-title-box-price-tag-pg">
                            Enterprise
                        </h3>
                        <h4 className="heading-title-box-price-tag-pg2">
                            For Investors looking to customize SID Investability Point and managing their data warehouse.
                        </h4>
                        <div className="tab-item-box-pricing-number-p">
                            <div className="item-pricing-box-number-p1">Custom</div>
                            <div className="item-pricing-box-number-p2"></div>
                            <div className="item-pricing-box-number-p3"></div>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=6281218990565&text=Hallo%20Startupindonesia%20Team" className="bt-bt-cta-pricing-tb">Contact Sales</a>
                        <div className="title-info-pricing-benefits">
                            All the benefits of Pro plan, plus:
                        </div>
                        <div className="wrap-list-benefits-pricing-table">
                            <ul className="list-benefits-pricing-table">
                                <li>Manage your inbound proposal</li>
                                <li>Customize the Investability Points to your investment thesis </li>
                                <li>A dedicated Account Manager</li>
                                <li>Customizable Report and Dashboard</li>
                            </ul>
                        </div>
                        {/* <div className="wrap-learn-more-bt-table-pricing">
                            <Link to="#" className="bt-Learn-more-tab-pricing">Learn More</Link>
                        </div> */}
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )
}

export default BoxPricing