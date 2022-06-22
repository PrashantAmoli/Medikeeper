import styles from '../../styles/cards.module.css';

export default function Welcome() {
  return (
    <>
      <div className={styles.card} style={{ boxShadow: 'none' }}>
        <h1 className={styles.head}>Welcome to Medikeeper</h1>
        <h3 className={styles.head}>Blockchain based medical record storage</h3>
        <br />
        <h5 className={styles.head}>
          Too often our health must take the back seat for what really is
          important,
        </h5>
        <h5 className={styles.head}>
          it is only when you lose your health that you realise how important it
          is.
        </h5>
        <h5 className={styles.head}>
          We are in the business of getting people's health back and teaching
          them how to stay healthy.
        </h5>
        <img href="https://www.verizon.com/about/sites/default/files/2020-10/transparency-hero-gif-1272x477_0.gif" />
      </div>
    </>
  );
}
