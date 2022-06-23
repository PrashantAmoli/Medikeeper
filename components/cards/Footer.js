import styles from '../../styles/cards.module.css';

const Footer = () => {
  const link = `https://PrashantAmoli.gitub.io`;
  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.head}>
          Developed by{' '}
          <a
            href={link}
            style={{ textDecoration: 'none', color: 'var(--color)' }}
          >
            Prashant Amoli
          </a>{' '}
          and deployed on Vercel and Goerli Network.
        </span>
      </footer>
    </>
  );
};

export default Footer;
