import React, { Component } from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import logo1 from '../../../images/skystaricon.png'
import logo2 from '../../../images/sequoiaicon.png'
import logo3 from '../../../images/mandiriicon.png'
import logo4 from '../../../images/insigniaicon.png'
import logo5 from '../../../images/wavemakericon.png'
import logo6 from '../../../images/vertexicon.png'

class Venturecapital extends Component {
    componentDidMount() {
    }
    render() {
        const data = [
            {
                logo: logo1
            },
            {
                logo: logo2
            },
            {
                logo: logo3
            },
            {
                logo: logo4
            },
            {
                logo: logo5
            },
            {
                logo: logo6
            }
        ]

        return (
            <div>
                <div className="wrap-venture-capital-running">
                    <h3 className="heading-title-venture-capital-home">
                        Trusted by Top Venture Capital
                    </h3>
                    <div className="logo-running marquee">
                        <Marquee velocity={70}>
                            {
                                data.map((item, key) => {
                                    return (
                                        <div className="item-logo-running-vc">
                                            <div className="item-logo-running-vc-in">
                                                <img src={item.logo} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Marquee>
                    </div>
                </div>
            </div >
        )
    }
}
export default Venturecapital