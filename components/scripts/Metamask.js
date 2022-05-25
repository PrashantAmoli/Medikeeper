import { ethers } from 'ethers';
import { useState } from 'react';

export default function Metamask() {
  const [data, setdata] = useState({
    address: '',
    Balance: null,
  });

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
        setdata({
          address: address,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
      Balance: null,
    });

    // Setting a balance
    getbalance(account);
  };
  return (
    <>
      <button onClick={handle}>Metamask</button>
      {/* <h1>Connection: {Data.connection}</h1> */}
      <h1>Address: {data.address}</h1>
      <h1>Balance: {data.Balance}</h1>
    </>
  );
}
