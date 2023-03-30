import React, { Component } from 'react';
import Menutop from '../../components/Parts/Menutop';
import Contactusection from '../../components/Parts/Contactusection';
import Footer from '../../components/Parts/Footer';
import BoxPricing from '../../components/Pricing/BoxPricing';
import Faq from '../../components/Pricing/Faq';
import { useHistory } from 'react-router-dom';

const Pricing = () => {
  const history = useHistory()
 const basic = {
     type: "Basic",
     desc: `Bring all your communication channels together in our shared inbox`,
     price: 120,
     period: 6,
     content: ["Access to 5 startups profile monthly", "Free monthly article"],
   }

    const pro = {
      type: "Pro",
      desc: `Automate the frequently asked questions with a personalized chatbot.`,
      price: 240,
      period: 6,
      content: [
        "Access to unlimited startup profile, annual report/financial",
        "Free monthly article",
        "Monthly startup recommendation / highlight based on SID score",
      ],
      model: "Basic",
    }

    const handleClick = (data) => {
        history.push(`/signup?planType=${data}`)
    }

  return (
    <div>
      <Menutop></Menutop>
      <div className="tw-h-full tw-pt-[8rem] tw-pb-[5rem] tw-relative tw-w-full tw-mx-auto tw-max-w-7xl tw-xl:tw-px-0 tw-px-5">
        {/* TITLE */}
        <div className="mb-5 tw-grid tw-grid-cols-1 tw-justify-items-center">
          <h1 className="tw-font-bold tw-text-center">
            Ready to reduce your workload?
          </h1>
          <p>Choose the plan that fits your needs.</p>
        </div>
        {/* PRICING */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5 tw-mx-auto tw-max-w-3xl">
          <div className="tw-w-full tw-rounded-2xl tw-h-full tw-p-10 tw-bg-[#f8f9fb] tw-shadow-sm">
            <div className="tw-grid tw-grid-cols-1 tw-gap-2">
              <h3 className="tw-font-bold">{basic.type}</h3>
              <p>{basic.desc}</p>
            </div>
            <div className="tw-grid tw-grid-cols-1 tw-mt-5">
              <h3 className="tw-font-semibold">USD ${basic.price}</h3>
              <p>/ {basic.period} months</p>
            </div>
            <div className="tw-grid tw-grid-cols-1">
              <button
                className="tw-rounded-md tw-py-2 tw-text-lg tw-font-semibold tw-bg-primary tw-text-white tw-border-[1px]"
                onClick={() => handleClick(basic.type)}
              >
                Choose Plan
              </button>
            </div>
            <ol className="ml-3 tw-mt-10 tw-list-outside tw-list-disc">
              {basic.content.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="tw-w-full tw-rounded-2xl tw-h-full tw-p-10 tw-bg-[#f8f9fb] tw-shadow-sm">
            <div className="tw-grid tw-grid-cols-1 tw-gap-2">
              <h3 className="tw-font-bold">{pro.type}</h3>
              <p>{pro.desc}</p>
            </div>
            <div className="tw-grid tw-grid-cols-1 tw-mt-5">
              <h3 className="tw-font-semibold">USD ${pro.price}</h3>
              <p>/ {pro.period} months</p>
            </div>
            <div className="tw-grid tw-grid-cols-1">
              <button
                className="tw-rounded-md tw-py-2 tw-text-lg tw-font-semibold tw-bg-primary tw-text-white tw-border-[1px]"
                onClick={() => handleClick(pro.type)}
              >
                Choose Plan
              </button>
            </div>
            <ol className="ml-3 tw-mt-10 tw-list-outside tw-list-disc">
              {pro.content.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Contactusection></Contactusection>
      <Footer></Footer>
    </div>
  )
}

export default Pricing