import React, { Component } from 'react';
import Menutop from '../../components/Parts/Menutop';
import Contactusection from '../../components/Parts/Contactusection';
import Footer from '../../components/Parts/Footer';
import BoxPricing from '../../components/Pricing/BoxPricing';
import Faq from '../../components/Pricing/Faq';

class Pricing extends Component {
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <Menutop></Menutop>
                <BoxPricing></BoxPricing>
                <Faq></Faq>
                <Contactusection></Contactusection>
                <Footer></Footer>
            </div>
        )
    }
}
export default Pricing