import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="SVP Fixed Income & Capital Markets"
            company="U.S. Bank"
            companyLink="https://www.usbank.com"
            time="2017-Present"
            address="New York, NY"
            work="See the Projects section for work done in Foreign Exchange, Risk Management, Fixed Income & Capital Markets, and Loan Capital Markets."
          />

          <Details
            position="Head of Capital Markets, Australia"
            company="RBS"
            companyLink="https://www.natwest.com/corporates.html"
            time="2012-2016"
            address="Sydney, AU & Singapore"
            work="Head of Short-term Markets, Equity Derivatives, and Interest Rate Derivatives for RBS, Australia. In Singapore, led project for sale of all APAC and US credit derivative portfolios, resulting in elimination of over 1K CDS positions, freeing up risk-weighted capital and reducing counterparty exposures."
          />

          <Details
            position="Managing Director"
            company="Sunrise Securities"
            companyLink="https://www.sunrisecorp.com/"
            time="2010-2012"
            address="New York, NY"
            work="Structured financing for clients in North America, South America and Asia in renewable energy, mining, power and energy transactions. Advised clients on M&A, corporate finance, and project finance."
          />

          <Details
            position="Executive Director"
            company="Nomura Securities"
            companyLink="https://www.nomura.com/"
            time="2005-2010"
            address="New York, NY"
            work="Senior member of team that structured and traded complex transactions for fixed income clients in North and South America. Joint venture with Capital Markets Desk on Latin American financings."
          />

          <Details
            position="Executive Director"
            company="UBS AG"
            companyLink="https://www.ubs.com/global/en.html"
            time="1992-2005"
            address="Chicago, Tokyo, Hong Kong, Singapore, Greenwich, CT"
            work="Head of Structured Credit Derivatives Trading for the Americas. Managed structured products trading team across Asia. Traded and structured interest rate and credit derivative products in the Americas and APAC. Designed and traded structured products, including correlation products, hybrid/exotic options, equity-linked notes, interest rate/credit hybrid products. Worked with UBS Wealth Management to design and execute products."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
