import React, {Component} from 'react';

const data = [
    {
        title: 'How do I raise my SID points?',
        paragraph: `SID Points are renewed every quarter. To assure that SID points can accurately represent the company at any given point,
        we advise founders to renew their pitch deck according to their company’s milestone as often as possible. This ensures that
        SID Points are the most accurate representation that reflects the most recent performance of a company.`
    }, {
        title: 'How can I get SID Points for my company?',
        paragraph: `SID Points are only available for companies that pass StartupIndonesia’s curation process. To request your company’s SID
        Points please contact us at erwin.arifin@bubu.com`
    }, {
        title: 'How are SID Points calculated?',
        paragraph: `SID Points are derived from the metrics preferred by early stage Investors. This is a combination of a few factors including;
        founder’s background, market size, industry growth, traction, existing funding`
    }, {
        title: 'What is an SID Point?',
        paragraph: `SID Points is an index that scores the likelihood for startups to receive equity and debt financing from Venture Capitals,
        Private Equities, or other non-bank financial providers`
    }, {
        title: 'What companies are curated by StartupIndonesia?',
        paragraph: `800 startups have been curated on the platform across 30+ sectors. The coverage includes early stage startups all across
        Indonesia`
    }, {
        title: 'What are the data points available for a company?',
        paragraph: `A large number of data points can be viewed such as their SID Points, founders, startup stage, startup location, industry,
        traction, market size, industry growth and business model`
    }, {
        title: 'Are SID Points up to date?',
        paragraph: `SID Points are renewed every quarter and users can see the last updated date.`
    }, {
        title: 'What is the source for this data?',
        paragraph: `All the data points collected in SID has come from a primary data source, this means that we receive all data exclusively
        from the founders of the business itself`
    }, {
        title: 'What should I do if the company of my interest is not curated on StartupIndonesia’s platform?',
        paragraph: `You can request a company of your interest to be scored by StartupIndonesia by contacting us at erwin.arifin@bubu.com`
    }, {
        title: 'What is the minimum threshold for a company to be included in SID?',
        paragraph: `The minimum score for inclusion is an SID Point of 2.5, this is because we apply a thorough curation process for all
        companies that apply. This method is to ensure that the quality of startups that gets displayed to Investors are above an SID
        point of 2.5`
    }
]

class Faq extends Component {
    render() {
        return (
            <div>

                <div class="wrap-testimonial-pricing">
                    <h3 class="title-heading-sec-pricing">
                        Frequently Asked Questions
                    </h3>
                    <div {...{ className: 'wrap-faq-dropdown-c' }}>
                        <ul {...{ className: 'accordion-list' }}>
                            {
                                data.map((data, key) => {
                                    return (
                                        <li {...{ className: 'accordion-list__item', key }}>
                                            <AccordionItem {...data}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Faq

class AccordionItem extends React.Component {
    state = {
        opened: false
    }

    render() {
        const {
            props: {
                paragraph,
                title
            },
            state: {
                opened
            }
        } = this

        return (
            <div
                {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}>
                <div {...{ className: 'accordion-item__line' }}>
                    <h3 {...{ className: 'accordion-item__title' }}>
                        {title}
                    </h3>
                    <span {...{ className: 'accordion-item__icon' }}>
                        <i className="fa fa-chevron-down"></i>
                    </span>
                </div>
                <div {...{ className: 'accordion-item__inner' }}>
                    <div {...{ className: 'panel-tb-in' }}>
                        <p>
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}