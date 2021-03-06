import Web3 from 'web3';
import GetMedicalInfo from '../ABIs/GetMedicalInfo.json';
import { useState, useEffect } from 'react';

const GetMedicalInfoABI = GetMedicalInfo.abi;
// const contractAddress = '0x0165878A594ca255338adfa4d48449f69242Eb8F'; // localhost
const contractAddress = '0x19b1970917E1Ec7D627924B65aaD0F4eac3BaD3b'; // Goerli

const GetData = () => {
  const [Account, setAccount] = useState('');

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    } else {
      return false;
    }
  };
  const load = async () => {
    const loaded = await loadWeb3();
    return loaded;
  };
  const getCurrentAccount = async () => {
    const accounts = await window?.web3?.eth?.getAccounts();
    if (accounts[0] != undefined) {
      setAccount(accounts[0]);
      return accounts[0];
    }
  };

  const getDoctor = async (ID) => {
    await load();

    const account = await getCurrentAccount();
    const contract = await new web3.eth.Contract(
      GetMedicalInfoABI,
      contractAddress
    );

    const result = await contract.methods.getMedicalInfoDoctor(String(ID)).call(
      {
        from: account,
      },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(
            'GetData Result: ',
            result[0],
            result[1],
            result[2],
            result[3]
          );
        }
      }
    );
    // name, speciality, hospital, gender
    return result;
  };

  const getPatient = async (ID) => {
    await load();

    const account = await getCurrentAccount();
    const contract = await new web3.eth.Contract(
      GetMedicalInfoABI,
      contractAddress
    );

    const result = await contract.methods
      .getMedicalInfoPatient(String(ID))
      .call(
        {
          from: account,
        },
        (err, result) => {
          if (err) console.log(err);
          if (result) {
            console.log(
              'GetData Result: ',
              result[0],
              result[1],
              result[2],
              result[3],
              result[4],
              result[5]
            );
          }
        }
      );
    return result;
  };

  const getReport = async (ID) => {
    await load();

    const account = await getCurrentAccount();
    const contract = await new web3.eth.Contract(
      GetMedicalInfoABI,
      contractAddress
    );

    const result = await contract.methods.getMedicalRecords(String(ID)).call(
      {
        from: account,
      },
      (err, result) => {
        if (err) console.log(err);
        if (result) {
          console.log(
            'GetData Result: ',
            result[0],
            result[1],
            result[2],
            result[3],
            result[4],
            result[5]
          );
        }
      }
    );
    // lastUpdated, medicalDosage, UpdatedBy, diagnosis, PDF, allPDF
    return result;
  };

  return { load, getCurrentAccount, Account, getPatient, getDoctor, getReport };
};

export default GetData;
