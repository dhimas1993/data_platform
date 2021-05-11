import React, { Component } from 'react';
import Menutop from '../../components/Parts/Menutop';
import Contactusection from '../../components/Parts/Contactusection';
import Footer from '../../components/Parts/Footer';
import Section1 from '../../components/Home/Section1';
import Section2 from '../../components/Home/Section2';
import Whatinside from '../../components/Home/Whatinside';
import Testimonial from '../../components/Home/Testimonial';

class Home extends Component {
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <Menutop></Menutop>
                <Section1></Section1>
                <Section2></Section2>
                <Whatinside></Whatinside>
                <Testimonial></Testimonial>
                <Contactusection></Contactusection>
                <Footer></Footer>
            </div>
        )
    }
}
export default Home