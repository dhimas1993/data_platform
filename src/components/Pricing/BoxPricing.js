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
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login before subscribes !!',
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
                            Asses your dealflow with "decision making" data point.
                        </h4>
                        <div className="tab-item-box-pricing-number-p">
                            <div className="item-pricing-box-number-p1">Rp 0</div>
                            <div className="item-pricing-box-number-p2">/ month</div>
                            <div className="item-pricing-box-number-p3"></div>
                        </div>
                        <Link to="#" className="bt-bt-cta-pricing-tb">Try for Free</Link>
                        <div className="title-info-pricing-benefits"></div>
                        <div className="wrap-list-benefits-pricing-table">
                            <ul className="list-benefits-pricing-table">
                                <li>Access to 5 startups per week</li>
                                <li>Access to SID Investability Point</li>
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
                            Asses your dealflow with "decision making" data point.
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
                                <li>Unlimited startup database</li>
                                <li>Access to SID Investability Point</li>
                                <li>Access to new dealflow every week</li>
                                <li>Generate Investment Memos</li>
                                <li>Include access detail of all data points (traction, contact founder, meeting log, etc)</li>
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
                            Asses your dealflow with "decision making" data point.
                        </h4>
                        <div className="tab-item-box-pricing-number-p">
                            <div className="item-pricing-box-number-p1">Custom</div>
                            <div className="item-pricing-box-number-p2"></div>
                            <div className="item-pricing-box-number-p3"></div>
                        </div>
                        <Link to="#" className="bt-bt-cta-pricing-tb">Contact Sales</Link>
                        <div className="title-info-pricing-benefits">
                            All the benefits of Pro Plan, and :
                        </div>
                        <div className="wrap-list-benefits-pricing-table">
                            <ul className="list-benefits-pricing-table">
                                <li>Manage Inbound Proposal</li>
                                <li>Custom Investability Point</li>
                                <li>Dedicated Account Manager</li>
                                <li>Customized Report and Dashboard</li>
                            </ul>
                        </div>
                        <div className="wrap-learn-more-bt-table-pricing">
                            <Link to="#" className="bt-Learn-more-tab-pricing">Learn More</Link>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )
}

export default BoxPricing