import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Граматика',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        На этом ресурсе вы найдете правила граматики курдского языка изложенный
        в порядке лучшего его усвоения.
      </>
    ),
  },
  {
    title: 'С примерами',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <>Примеры взяты с реальных публикаций.</>,
  },
  {
    title: 'Стандартный диалект',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>Более-менее стандартный и понятный диалект этого языка.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Граматика языка ${siteConfig.title}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/chapter-1/pronouns')}
            >
              Начинаем
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1em' }}>
            Последнее обновление было 04.05.2021
          </p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
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
