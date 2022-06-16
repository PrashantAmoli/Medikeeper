import { useState, useEffect } from 'react';
import useStorage from '../hooks/useStorage.js';
import styles from '../../styles/cards.module.css';
import GetData from './GetData.js';

export default function Metamask() {
  const [Address, setAddress] = useState('');

  const { setItem, getItem, removeItem } = useStorage();
  const { load, getCurrentAccount } = GetData();

  useEffect(() => {
    if (getItem('address'))
      setAddress(getItem('address'));
  }, []);

  // Button handler button for handling a request event for metamask
  const handle = async() => {
    await load();
    const address = await getCurrentAccount();
    await setAddress(address);
    await setItem('address', address);

  };

  return (
    <>
      <div className={styles.card}>
        <h2>Metamask</h2>
        {Address == '' || Address == undefined ? (
          <>
            <button onClick={handle}>Login</button>
            <h4>Connect using your Metamask account</h4>
          </>
        ) : (
          <>
          {/* <button onClick={logout}>Logout</button> */}
            <h4>Address: </h4>
            <h4>{Address}</h4>
          </>
        )}
      </div>
    </>
  );
}
