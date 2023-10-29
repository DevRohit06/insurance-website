import React, { useState } from "react";

const Accordion = () => {
  return (
    <>
      <div className=" w-5/6 mx-auto">
        <section className="relative z-20 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    FAQ
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    Any Questions? Look Here
                  </h2>
                  <p className="text-base text-body-color">
                  At <b>LifeInsureEase</b>, we understand that navigating the world of life insurance can raise numerous questions. We've curated this Frequently Asked Questions (FAQ) section to provide you with comprehensive answers to some of the most common queries our clients have had about life insurance.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="What is life insurance?"
                  text="Life insurance is a financial contract that provides a payout to your beneficiaries in the event of your death. It offers financial protection and peace of mind, ensuring your loved ones are financially secure after you're gone.
              "
                />
                <AccordionItem
                  header="Why do I need life insurance?"
                  text="Life insurance is essential if you have dependents, such as a spouse, children, or aging parents who rely on your income. It provides a safety net to cover their financial needs when you're no longer there.
              "
                />
                <AccordionItem
                  header="What types of life insurance are available?"
                  text="There are two primary types: term life insurance and permanent life insurance. Term insurance provides coverage for a specific period, while permanent insurance lasts your entire life and may have an investment component."
                />
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="Can I change my life insurance policy later?
                  "
                  text="Yes, many life insurance policies offer flexibility. You can often adjust your coverage amount or convert term insurance to permanent insurance, but these options may have specific rules and limitations.
                  "
                />
                <AccordionItem
                  header="How do I apply for life insurance through your website?
                  "
                  text="Applying for life insurance through our website is simple. Start by getting a quote and then follow the application process, which typically involves answering a few health and lifestyle questions. Our team will guide you through the process, and you can also contact us for personalized assistance."
                />
                <AccordionItem
                  header="How much life insurance do I need?
                  "
                  text="The amount of coverage you need depends on your financial obligations, like mortgage, debts, education expenses, and the financial well-being of your dependents. Our calculator can help you determine the right coverage for your situation.

                  "
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] transition-all duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
      </div>
    </div>
  );
};
