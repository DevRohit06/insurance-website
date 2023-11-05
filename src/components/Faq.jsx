import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem.jsx";
const Accordion = () => {
  return (
    <>
      <div id="faq" className=" w-5/6 mx-auto">
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
                    At <b>LifeInsureEase</b>, we understand that navigating the
                    world of life insurance can raise numerous questions. We've
                    curated this Frequently Asked Questions (FAQ) section to
                    provide you with comprehensive answers to some of the most
                    common queries our clients have had about life insurance.
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
