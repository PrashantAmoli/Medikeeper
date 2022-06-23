import styles from '../../styles/cards.module.css';

export default function Welcome() {
  return (
    <>
      <div className={styles.card} style={{ boxShadow: 'none' }}>
        <h1 className={styles.head}>Welcome to Medikeeper</h1>
        <h3 className={styles.head}>Blockchain based medical record storage</h3>
        <br />
        <p>
          Too often our health must take the back seat for what really is
          important,
        </p>
        <p>
          it is only when you lose your health that you realise how important it
          is.
        </p>
        <p>
          We are in the business of getting people's health back and teaching
          them how to stay healthy.
        </p>
        <p>
          We provide a secure reporsitory on Ethereum Blockchain to stores your
          medical records
        </p>
        <img href="https://i.gifer.com/74pZ.gif" />
      </div>
    </>
  );
}
