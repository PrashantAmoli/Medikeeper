import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import useStorage from '../hooks/useStorage.js';
import styles from '../../styles/cards.module.css';

export default function Metamask() {
  const [Address, setAddress] = useState('');

  const { setItem, getItem, removeItem } = useStorage();

  // useEffect(() => {
  //   const address = getItem('address');
  //   const balance = getItem('balance');
  //   if (getItem('address') && getItem('balance'))
  //     setData({
  //       address: address,
  //       balance: balance,
  //     });
  // }, []);

  // Button handler button for handling a request event for metamask
  const handle = () => {
    // // Asking if metamask is already present or not
    // if (window.ethereum) {
    //   // res[0] for fetching a first wallet
    //   window.ethereum
    //     .request({ method: 'eth_requestAccounts' })
    //     .then((res) => accountChangeHandler(res[0]));
    // } else {
    //   alert('Install Metamask extension on your desktop brower to continue!!!');
    // }
    
  };

  // getbalance function for getting a balance in a right format with help of ethers
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
        setItem('address', address);
        setItem('balance', ethers.utils.formatEther(balance));
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address Data
    // Setting a balance
    getbalance(account);
  };

  const logout = () => {
    // if(getItem('address'))
    removeItem('address');
    removeItem('balance');
    setData({
      address: getItem('address') || '',
      balance: getItem('balance') || '',
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
            <h4>Address: </h4>
            <h4>{Data.address}</h4>
            <h4>Balance: </h4>
            <h4>{Data.balance}</h4>
          </>
        )}
      </div>
    </>
  );
}
