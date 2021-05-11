import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import Logoslide from '../../../images/lgdoogether.png'
import Bannerslide from '../../../images/slidertvc1.png'

class Slidert extends Component {
    componentDidMount() {
        $(".owl-dots").wrap("<div class='wrap-owl-dots'></div>");
    }
    render() {

        const data = [
            {
                Logoslide: Logoslide,
                Bannerslide: Bannerslide,
                Testimonitext: "Boost your chance to raise capital with PitchUp",
                Nametestimoni: "Fauzan",
                Position: "CEO of Doogether"
            },
            {
                Logoslide: Logoslide,
                Bannerslide: Bannerslide,
                Testimonitext: "Boost your chance to raise capital with PitchUp",
                Nametestimoni: "Fauzan 2",
                Position: "CEO of Doogether"
            },
            {
                Logoslide: Logoslide,
                Bannerslide: Bannerslide,
                Testimonitext: "Boost your chance to raise capital with PitchUp",
                Nametestimoni: "Fauzan 3",
                Position: "CEO of Doogether"
            }
        ]
        const options = {
            loop: true,
            autoplayTimeout: 7000,
            autoplay: true,
            margin: 10,
            touchDrag: false,
            mouseDrag: false,
            center: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause: false,
            autoHeight: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            items: 1
        };

        const events = {

        };
        return (
            <div>
                <div className="wrap-slider-testimonihome">
                    <div className="slider-testimonihome">
                        <OwlCarousel refs="car" options={options} events={events}>
                            {
                                data.map((item, key) => {
                                    return (
                                        <div className="item">
                                            <div className="item-slider-testimonihome">
                                                <div className="item-slider-testimonihome-right">
                                                    <img src={item.Bannerslide} alt="" />
                                                </div>
                                                <div className="item-slider-testimonihome-left">
                                                    <div className="logo-slider-testimonihome">
                                                        <img src={item.Logoslide} alt="" />
                                                    </div>
                                                    <div className="testimonihome-desc">
                                                        "{item.Testimonitext}"
                                                    </div>
                                                    <div className="sec-testimonihomeby">
                                                        <h4 className="testimonihomeby-text">
                                                            {item.Nametestimoni}
                                                        </h4>
                                                        <h4 className="testimonihomeby-text">
                                                            {item.Position}
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>

                    </div>
                </div>
            </div >
        )
    }
}
export default Slidert