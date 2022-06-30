import styles from '../../styles/cards.module.css';
import { useState, useEffect } from 'react';

export default function Redirect() {
  const [Count, setCount] = useState('');

  useEffect(() => {
    let i = 5;
    setInterval(() => {
      i = i - 1;
      setCount(i);
    }, 1000);
  }, []);
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.head}>
          You will be redirected to homepage in {Count} seconds
        </h3>
        <br />
        <h3 className={styles.head}>
          Login with your Metamask account over Goerli Network from Homepage to
          continue...
        </h3>
      </div>
    </>
  );
}
