import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import ava1 from '../../images/avatar1.png'
import ava2 from '../../images/avatar2.jpeg'
import ava3 from '../../images/avatar3.jpeg'

class Testimonial extends Component {
    componentDidMount() {

    }
    render() {
        const data = [
            {
                testimonial: `StartupIndonesia also goes one step further by providing the SID points as a helpful benchmark of each startup's performance. `,
                username: 'Natasha Gunawan',
                position: `Engagement Manager Monk's Hill Ventures`,
                avatar: ava1
            },
            {
                testimonial: `StartupIndonesia has managed to help us discover great startups and founders which are not on our radar yet`,
                username: 'Alvin Evander',
                position: `GM of Corporate Development MDI Venture`,
                avatar: ava2
            },
            {
                testimonial: `It was great! So far it has been very helpful. Solving the VC's pain points`,
                username: 'Ilman Dzikri ',
                position: `Investment Associate Alpha JWC`,
                avatar: ava3
            }
        ]
        
        const options = {
            loop: true,
            autoplayTimeout: 6000,
            autoplay: false,
            touchDrag: false,
            mouseDrag: false,
            margin: 30,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause: false,
            autoHeight: false,
            nav: false,
            navContainerClass: 'bt-nav-slider-home',
            navText:["<div class='nav-btn-slide-home prev-slide'><i class='fa fa-angle-left'></i></div>","<div class='nav-btn-slide-home next-slide'><i class='fa fa-angle-right'></i></div>"],
            dots: false,
            center: false,
            smartSpeed: 700,
            items: 1
        };

        const events = {

        };
        return (
            <div>
                <div className="wrap-slider-testimonials-sec">
                    <div className="slider-testimonials-sec">
                        <OwlCarousel refs="car" options={options} events={events}>
                            {
                                data.map((item, key) => {
                                    return(
                                        <div className="item">
                                            <div className="item-slider-sec-testimonials-block">
                                                <div className="item-slider-sec-testimonials-avatar">
                                                    <img src={item.avatar} alt=""/>
                                                </div>
                                                <div className="item-slider-sec-testimonials-info">
                                                    <h3 className="testimonial-text-slider-sec">
                                                        "{item.testimonial}"
                                                    </h3>
                                                    <div className="item-info-user-testimonials-slide">
                                                        <h4 className="item-info-user-test-slider-user">{item.username}</h4>
                                                        <h4 className="item-info-user-test-slider-user">{item.position}</h4>
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
            </div>
        )
    }
}
export default Testimonial