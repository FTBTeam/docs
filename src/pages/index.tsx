import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="container container-fluid padding-bottom--lg padding-top--lg">
      <h1>FTB Docs</h1>
      <p>Welcome to the FTB Documentation and support topics</p>

      <div className={styles.buttons}>
        <a
          className={clsx(
            'button button--primary button--lg',
          )}
          href="/docs/intro">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="FTB Documentaion and support topics">
      <HomepageHeader />
    </Layout>
  );
}
