import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_all_the_data_h4ki.svg',
    description: (
      <>
        Ready for implementation in Xcode with CocoaPods and XCFramework.
      </>
    ),
  },
  {
    title: <>All included</>,
    imageUrl: 'img/undraw_working_out_6psf.svg',
    description: (
      <>
        No need of sensor data acquisition or pattern recognition knowledge.
      </>
    ),
  },
  {
    title: <>Powered by Deep Learning</>,
    imageUrl: 'img/undraw_Artificial_intelligence_oyxx.svg',
    description: (
      <>
        Highest accuracy and reliability through innovative machine learning technology with neural networks.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}





function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          {/*<div className={styles.ytContainer}>*/}
          {/*  <iframe*/}
          {/*      src="https://www.youtube.com/embed/0GG-m6shCA4?rel=0&amp;controls=2&amp;showinfo=0"*/}
          {/*      frameBorder="0" allowFullScreen>*/}
          {/*  </iframe>*/}
          {/*</div>*/}

          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg evomo-orange',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getStarted')}>
              Get Started
            </Link>
          </div>
          <p></p>
          <div className={styles.buttons}>
            <p >
              <a href="https://apps.apple.com/de/app/id1460266964" className={classnames(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                  'evomo-orange',
              )} >Try iOS Demo App</a>
            </p>
          </div>

        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
