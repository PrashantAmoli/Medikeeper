import styles from '../../styles/cards.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.head}>
          Medikeeper DApp developed by on
          <Link href={`https://stackblitz.com/edit/medikeeper`} target="_blank">
            <a
              href={`https://stackblitz.com/edit/medikeeper`}
              target="_blank"
              style={{ textDecoration: 'none', color: 'var(--color)' }}
            >
              &ensp;Stackblitz
            </a>
          </Link>{' '}
          and deployed on Vercel and Goerli Network.
        </span>
        <small>
          &copy; Copyright 2022
          <Link href={link} target="_blank">
            <a
              href={`https://PrashantAmoli.github.io`}
              target="_blank"
              style={{ textDecoration: 'none', color: 'var(--color)' }}
            >
              &emsp; Prashant Amoli
            </a>
          </Link>{' '}
          <Link href={`/AdminPanel`}>
            <a
              style={{ textDecoration: 'none', color: 'var(--color)' }}
            >
              {' '}
              &emsp; All Rights Reserved &emsp;
            </a>
          </Link>
        </small>
      </footer>
    </>
  );
};

export default Footer;
