import React, {HTMLProps} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type LearnProps = {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  link: string;
  btnText: string;
} & HTMLProps<HTMLDivElement>

function LearnSection({title, desc, img, imgAlt, link, btnText, ...divProps}: LearnProps) {
  return <div
    {...divProps}
    className={clsx("flex relative bg-black dark:bg-opacity-20 bg-opacity-5 overflow-hidden items-center justify-center gap-12 lg:max-w-screen-lg rounded-xl mx-auto lg:flex-row flex-col text-center lg:text-left p-4 py-16 lg:py-4 shadow-lg", divProps.className)}
  >
    <div className="w-80 max-h-none lg:max-h-56 flex items-center justify-center">
      <img src={img} className="relative lg:-bottom-20 lg:-mt-12 w-full h-full"
           alt={imgAlt} />
    </div>
    <div className="flex-1">
      <h3>{title}</h3>
      <p>{desc}</p>

      <a href={link} className="button button--primary">{btnText}</a>
    </div>
  </div>
}

export default function Home(): JSX.Element {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="FTB Documentation and support topics">

      <div className="container container-fluid padding-bottom--lg padding-top--lg">
        <div className="flex justify-center mt-10 mb-16">
          <img src="/img/logo.svg" width={160} alt="FTB Logo"/>
        </div>

        <div className="text-center">
          <h1>Feed The Beast: Docs</h1>
          <p className="md:max-w-3xl mx-auto mb-20">
            Welcome to the FTB Docs site! Here you can find support topics for our related projects, in-depth guides for
            creating servers, using our App, and much more.
          </p>
        </div>

        <div className="sections">
          <LearnSection
            title="FTB App"
            desc="Get to know the FTB App for managing and customizing your Modpacks using our step by step guides and troubleshooting tips."
            img="/img/misc/app-image.png"
            imgAlt="Screenshot of the FTB App"
            link='/docs/app'
            btnText="Learn about the FTB App"
            className="mb-8"
          />

          <LearnSection
            title="Our Mods"
            desc="Learn about our Minecraft mods and how to use them. We've got guides for beginners as well as advanced users and modpack developers."
            img="/img/misc/quests.png"
            imgAlt="FTB Marketplace logo"
            link="/mod-docs/mods/suite"
            btnText="Explore our mods"
            className="mb-8"
          />

          <LearnSection
              title="Marketplace"
              desc="Explore and learn about our Bedrock Marketplace addons and worlds."
              img="/img/misc/minecraft-partner-logo.png"
              imgAlt="FTB Quests logo"
              link="/docs/marketplace"
              btnText="Explore"
              className="mb-8"
          />

          <LearnSection
            title="Support"
            desc="Looking for help? Check out our support guides and toubleshooting tips for common issues with our App, Mods, and more."
            img="/img/misc/guides.png"
            imgAlt="FTB Quests logo"
            link="/docs/support"
            btnText="Find guides and support"
            className="mb-8"
          />
        </div>
      </div>
    </Layout>
  );
}
