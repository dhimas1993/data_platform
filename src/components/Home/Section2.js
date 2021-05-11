import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sidpoint from '../../images/sidpoint.png'

class Section2 extends Component {
    render() {
        return (
            <div>
                <div className="wrap-section-1-data-plat wrap-section-2-data-plat">
                    <h3 className="heading-title-sid-point">
                        SID Point
                    </h3>
                    <h2 className="heading-title-section-2-dp">
                        Discover more deals faster <br/> using our Investability score
                    </h2>
                    <h4 className="subheading-title-section-1-dp">
                        Derived from the metrics preferred by early stage VCs, our SID point automatically scores the likelihood for startups to receive equity & debt financing from investors
                    </h4>
                    <div className="img-sec-data-platform-point">
                        <img src={sidpoint} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section2