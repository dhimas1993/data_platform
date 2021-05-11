import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function ErrorPage () {
    return (
            <div className="wrap-dashboard-content-section-page-in">
            {/* pro plan section */}
            <div className="wrap-pro-plan-section-upgrade">
                <div className="wrap-pro-plan-section-upgrade-in">
                    <div className="box-upgrade-pro-plan-item">
                        {/* <div className="heading-title-box-upgrade-pro-plan">
                            Error Page
                        </div> */}
                        <div className="info-content-box-upgrade-pro-plan">
                            <h1 className="head-title-text-pro-plan-c">
                                <b>404</b>
                            </h1>
                            <h3 className="head-title-text-pro-plan-c">
                                Page Not Found
                            </h3>
                            <Link to="/" className="bt-upgrade-pro-plan-cta">Go To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage