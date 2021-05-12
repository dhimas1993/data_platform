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
                        Want to get your startup highlighted ?
                    </h3>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=6281218990565&text=Hallo%20Startupindonesia%20Team" className="bt-cta-header-home2">Click Here</a>
                </div>
            </div >
        )
    }

}
export default Contactusection