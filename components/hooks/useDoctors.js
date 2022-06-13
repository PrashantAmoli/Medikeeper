import Doctors from '../ABIs/Doctors.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const ContractABI = Doctors.abi;
const ContractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

const Ethereum = typeof window !== 'undefined' && window.ethereum;

const getDoctorsContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(ContractAddress, ContractABI, signer);
};

const useDoctors = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const connect = async () => {
    try {
      if (!Ethereum) {
        alert('Please install MetaMask');
        return;
      }
      const accounts = await Ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts.length === 0) {
        console.log('No authorized accounts');
        return;
      }
      const account = accounts[0];
      console.log('Connected to account: ', account);
      setCurrentAccount(account);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!Ethereum) {
      console.log('No ethereum wallets found, please get metamask');
      return;
    }
    connect(); //Connect if Ethereum wallet is found
  }, []);

  useEffect(() => {
    if (currentAccount) {
      console.log(currentAccount);
      // getUser();
      // getDweets();
    }
  }, [currentAccount]);

  // * Contracts

  // TODO: Pass Doctos data object to this function
  const addDoctor = async (Doctor) => {
    const contract = getDoctorsContract();
    const DoctorName = await contract.addDoctorName(
      Doctor.doctorsID,
      Doctor.doctorsName
    );
    const DoctorSpeciality = await contract.addDoctorSpeciality(
      Doctor.doctorsID,
      Doctor.speciality
    );
    const DoctorHospital = await contract.addDoctorHospital(
      Doctor.doctorsID,
      Doctor.hospital
    );
    const DoctorGender = await contract.addDoctorGender(
      Doctor.doctorsID,
      Doctor.gender
    );
    console.log(Doctor);
    setCurrentUser(Doctor);
  };

  // TODO: Pass Doctos Id as string to this function
  const getDoctor = async (DoctorID) => {
    const contract = getDoctorsContract();
    const doctorsName = await contract.getDoctorName(DoctorID);
    const speciality = await contract.getDoctorSpeciality(DoctorID);
    const hospital = await contract.getDoctorHospital(DoctorID);
    const gender = await contract.getDoctorGender(DoctorID);
    console.log(
      `getDoctor returned { ${doctorsName}, ${speciality}, ${hospital}, ${gender} }`
    );
    // setCurrentUser(Doctor);
    return { doctorsName, speciality, hospital, gender };
  };

  // return { connect, account: currentAccount, user: currentUser, createUser, postDweet, dweets };
  return {
    connect,
    account: currentAccount,
    user: currentUser,
    getDoctor,
    addDoctor,
  };
};
export default useDoctors;
