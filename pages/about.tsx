import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>About</h1>
      <p>
        Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc
        Lorem ipsum dipsunm etc
      </p>
      <h3>Try it out</h3>
      <p>
        Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc
        Lorem ipsum dipsunm etc
      </p>
      <p>
        Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc
        Lorem ipsum dipsunm etc
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
