import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sampledata from '../../images/sampledp1.png'

class Section1 extends Component {
    render() {
        return (
            <div>
                <div className="wrap-section-1-data-plat">
                    <h1 className="heading-title-section-1-dp">
                        Discover <span>Investable Startups</span> <br/> Across Indonesia 
                    </h1>
                    <h4 className="subheading-title-section-1-dp">
                        Unlock opportunities in the private sectors with our data platform. We update this database every week - never miss out on the hottest dealflow.
                    </h4>
                    <div className="wrap-bt-try-for-free">
                        <Link to="/login" className="bt-try-for-free-sec1">Try for Free</Link>
                    </div>
                    <div className="img-sec-data-platform-sample">
                        <img src={sampledata} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section1