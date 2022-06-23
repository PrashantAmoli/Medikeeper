import styles from '../../styles/cards.module.css';

export default function Redirect() {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.head}>
          Login with your Metamask account over Goerli Network to continue...
        </h3>
      </div>
    </>
  );
}
