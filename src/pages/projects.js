import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/PBILight.jpg";
import project2 from "../../public/images/projects/ibm-take-two.png";
import project3 from "../../public/images/projects/Acadia.png";
import project4 from "../../public/images/projects/TCV_0001_riskmetrics.png";
import project5 from "../../public/images/projects/BroadRidge.jpg";
import project6 from "../../public/images/projects/NatWest.png";

import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark  bg-light dark:bg-dark dark:border-light shadow-2xl p-12 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link> */}
          {/* <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
          >
            Visit Project
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        {/* <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline md:text-base'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div> */}
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Chris.Aney | Projects Page</title>
        <meta
          name="description"
          content="Projects by Chris Aney, FinTech developer"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination And Teamwork Build Businesses!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Power BI Front-Office Applications"
                img={project1}
                summary="Created dynamic, self-updating reports for front-office businesses such as Loan Capital Markets to view key metrics on the full breadth of the loan portfolios. Skills: Power BI, DAX, SQL"
                link="https://powerbi.microsoft.com/en-us/"
                // github='/'
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="IBM Business Automation Worflow (BAW) "
                img={project2}
                summary="Implemented IBM Automation software application for Credit Approvals and Record Keeping. Skills: Agile/Scrum, Jira, BAW, SQL, JavaScript"
                link="https://www.ibm.com/products/business-automation-workflow"
                // github='/'
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Acadia's Open-Source Risk Engine (ORE)"
                img={project3}
                summary="Implemented QuantLib and ORE for calculating Potential Future Exposure (PFE) and Risk Weighted Assets (RWA) using an internal model jointly developed with Acadia Quaternion.  Skills: C++, Python, Github, GitLab, SQL"
                link="https://www.quantlib.org/"
                // github='/'
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="RiskMetric RWA and VAR Analysis"
                img={project4}
                summary="Implemented RiskMetrics platform for risk analytics including RWA and VAR. Skills: C#/.Net, SQL, Excel"
                link="https://www.msci.com/"
                // github='/'
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ORC Trading: Equity Derivatives Trading Platform"
                img={project5}
                summary="Implemented an electronic trading platform for making markets on a range of Equity Warrants on the ASX. Skills: Java, SQL"
                link="https://www.broadridge.com/financial-services/capital-markets/"
                // github='/'
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Agile Markets FX Trading Platform"
                img={project6}
                summary="Member of team to construct the first FX electronic trading platform for NatWest/RBS Asia. Skills: Java, SQL"
                link="https://www.natwest.com/corporates/currencies-and-international-trade/agile-markets.html"
                // github='/'
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
