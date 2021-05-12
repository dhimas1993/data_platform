import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../images/bgcontactus.png'

var backgroundstyle = {
    backgroundSize: "100% 100%",
    backgroundImage: `url(${Background})`
};
class Contactusection extends Component {
    render() {
        return (
            <div>
                <div className="wrap-section-contact-us-link" style={backgroundstyle}>
                    <h3 className="title-section-contact-us-link">
                        Hack your growth with Startupindonesia now
                    </h3>
                    <Link to="/" className="bt-cta-header-home2">Contact Us</Link>
                </div>
            </div >
        )
    }

}
export default Contactusection