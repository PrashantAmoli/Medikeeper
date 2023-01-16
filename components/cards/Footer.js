import styles from '../../styles/cards.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        {/* <span className={styles.head}>
          Medikeeper DApp deployed on Goerli Network.
        </span> */}
        <small>
          &copy; Copyright 2023
          <Link href={`https://PrashantAmoli.github.io`} target="_blank">
            <a style={{ textDecoration: 'none', color: 'var(--color)' }}>
              &ensp; Prashant Amoli
            </a>
          </Link>{' '}
          <Link href={`/AdminPanel`}>
            <a style={{ textDecoration: 'none', color: 'var(--color)' }}>
              {' '}
              &ensp; All Rights Reserved
            </a>
          </Link>
        </small>
      </footer>
    </>
  );
};

export default Footer;
