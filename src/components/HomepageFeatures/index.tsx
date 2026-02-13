import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Forensics',
    link: '/docs/category/forensics',
    description: (
      <>
        Onderzoek digitale sporen: van de Wayback Machine en IP-adressen tot
        verborgen bestanden en audio-analyse.
      </>
    ),
  },
  {
    title: 'Hacking',
    link: '/docs/category/hacking',
    description: (
      <>
        Leer over wachtwoorden, cookies, HTTP-headers, robots.txt en meer.
        Ontdek hoe kwetsbaarheden in websites werken.
      </>
    ),
  },
  {
    title: 'Code',
    link: '/docs/category/code',
    description: (
      <>
        Crack versleutelde berichten, decodeer Base64, ontcijfer geobfusceerde
        code en los crypto-puzzels op.
      </>
    ),
  },
];

function Feature({title, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
