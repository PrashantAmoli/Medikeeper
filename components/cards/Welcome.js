import styles from '../../styles/cards.module.css';
import Image from 'next/image';

export default function Welcome() {
  const myLoader = ({ src, width, quality }) => {
    return `https://scitechdaily.com/images/Futuristic-Medicine-Health-Data-Biotechnology.gif`;
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  };
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
        <Image
          loader={myLoader}
          src="https://scitechdaily.com/images/Futuristic-Medicine-Health-Data-Biotechnology.gif"
          alt="Picture of the author"
          width={700}
          height={400}
        />
      </div>
    </>
  );
}
