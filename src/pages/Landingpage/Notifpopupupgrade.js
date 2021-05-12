import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Notifpopupupgrade extends Component {
    componentDidMount() {
    }
    render() {

        return (
            <div>
                <div className="wrap-pro-plan-section-upgrade-bg">
                    <div className="wrap-pro-plan-section-upgrade">
                        <div className="wrap-pro-plan-section-upgrade-in">
                            <div className="box-upgrade-pro-plan-item">
                                <div className="heading-title-box-upgrade-pro-plan">
                                    Pro Plan
                                </div>
                                <div className="info-content-box-upgrade-pro-plan">
                                    <h3 className="head-title-text-pro-plan-c">
                                        <b>This is a Paid Feature</b>
                                    </h3>
                                    <h3 className="head-title-text-pro-plan-c">
                                        To have unrestricted access to all the paid feature please upgrade
                                    </h3>
                                    <a className="bt-upgrade-pro-plan-cta">Upgrade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Notifpopupupgrade