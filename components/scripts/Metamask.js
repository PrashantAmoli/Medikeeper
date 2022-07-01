import { useState, useEffect } from 'react';
import useSession from '../hooks/useSession.js';
import styles from '../../styles/cards.module.css';
import GetData from './GetData.js';
import Image from 'next/image';
import Modal from '../cards/Modal';

export default function Metamask() {
  const [Address, setAddress] = useState('');

  const { setItem, getItem, removeItem } = useSession();
  const { load, getCurrentAccount } = GetData();

  useEffect(() => {
    if (getItem('address') && ethereum.isConnected() == false) {
      setAddress(null);
      removeItem('address');
    } else if (getItem('address')) setAddress(getItem('address'));
  }, []);

  useEffect(() => {
    // if (Address != null) setItem('address', Address);
  }, [Address]);

  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  // Button handler button for handling a request event for metamask
  const handle = async () => {
    await load();
    const update = async (add) => {
      const address = await getCurrentAccount();
      if (address == '' || address == undefined) {
        return;
      }
      setTimeout(() => {
        setAddress(address);
        setItem('address', address);
      }, 1000);
    };
    await update(getCurrentAccount());
  };

  const removeSession = () => {
    removeItem('address');
    setAddress(null);
  };

  return (
    <>
      <div className={styles.card} style={{ alignItems: 'center' }}>
        <h2 className={styles.head}>Metamask</h2>
        {Address == '' || Address == undefined ? (
          <>
            <button onClick={handle}>Connect</button>
            <span className={styles.head}>
              Connect using your Metamask account on Goerli Network
            </span>
          </>
        ) : (
          <>
            <br />
            <h4 className={styles.head}>Connected</h4>
            <br />
            <button onClick={removeSession}>Reset</button>
          </>
        )}
        <Image
          loader={myLoader}
          src="https://cdn.dribbble.com/users/2574702/screenshots/6702374/metamask.gif"
          alt="Metamask"
          width="400"
          height="300"
        />
      </div>
    </>
  );
}
