import Web3 from 'web3';
import GetMedicalInfo from '../ABIs/GetMedicalInfo.json';
import { useState, useEffect } from 'react';

const GetMedicalInfoABI = GetMedicalInfo.abi;
const contractAddress = '0x0165878A594ca255338adfa4d48449f69242Eb8F';

const GetData = () => {
  const [Account, setAccount] = useState('');

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
  };
  const load = async () => {
    await loadWeb3();
  };
  const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    setAccount(accounts[0]);
    return accounts[0];
  };

  const getDoctor = async (ID) => {
    load();

    const account = await getCurrentAccount();
    const contract = await new web3.eth.Contract(
      GetMedicalInfoABI,
      contractAddress
    );

    console.log(contract.methods);

    const result = await contract.methods.getMedicalInfoDoctor(String(ID)).send(
      {
        from: account,
      },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(result[0], result[1], result[2], result[3]);
        }
      }
    );
    console.log(JSON.stringify(result), result);
    return result;
  };

  return { getDoctor };
};

export default GetData;
