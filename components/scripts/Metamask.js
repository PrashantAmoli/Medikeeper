import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import useStorage from '../hooks/useStorage.js';
import styles from '../../styles/cards.module.css';

export default function Metamask() {
  const [Data, setData] = useState({
    address: '',
    balance: null,
  });

  const { setItem, getItem, removeItem } = useStorage();

  useEffect(() => {
    setItem('address', Data.address);
  }, [Data]);

  // Button handler button for handling a
  // request event for metamask
  const handle = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert('install metamask extension!!');
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      })
      .then((balance) => {
        // Setting balance
        setData({
          address: address,
          balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address Data
    setData({
      address: account,
      balance: null,
    });

    // Setting a balance
    getbalance(account);
  };

  const logout = () => {
    // if(getItem('address'))
    removeItem('address');
    setData({
      address: getItem('address'),
      balance: null,
    });
  };
  return (
    <>
      <div className={styles.card}>
        <h2>Metamask</h2>
        {Data.address == '' || Data.address == undefined ? (
          <button onClick={handle}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {Data.address == '' || Data.address == undefined ? (
          <h4>Connect using your Metamask account</h4>
        ) : (
          <>
            <h4>Address: {Data.address}</h4>
            <h4>Balance: {Data.balance}</h4>
          </>
        )}
      </div>
    </>
  );
}
