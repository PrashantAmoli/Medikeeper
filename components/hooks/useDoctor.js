// * This is the new hook
import AddMedicalInfo from '../ABIs/AddMedicalInfo.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
// import { addMessageListener } from 'next/dist/client/dev/error-overlay/websocket';

const ContractABI = AddMedicalInfo.abi;
const ContractAddress =
  process.env.NEXT_PUBLIC_ADDMEDICALINFO ||
  '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';

const Ethereum = typeof window !== 'undefined' && window.ethereum;

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(ContractAddress, ContractABI, signer);
};

const useDoctor = () => {
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
    }
  }, [currentAccount]);

  // TODO: Pass Doctos data object to this function
  const addDoctor = async (Doctor) => {
    const contract = getContract();
    console.log(contract);

    const result = contract.AddMedicalInfoDoctor(
      Doctor.doctorsName,
      Doctor.doctorsID,
      Doctor.speciality,
      Doctor.hospital,
      Doctor.gender
    );
    //   .send(
    //     {
    //       from: currentAccount,
    //     },
    //     (err, result) => {
    //       if (err) {
    //         console.log(err);
    //       }
    //     }
    //   );

    console.log(result);
    console.log(JSON.stringify(Doctor));
    setCurrentUser(Doctor);
  };

  return {
    connect,
    account: currentAccount,
    user: currentUser,
    addDoctor,
  };
};
export default useDoctor;

// const DoctorName = await contract.addDoctorName(
//   Doctor.doctorsID,
//   Doctor.doctorsName
// );
// const DoctorSpeciality = await contract.addDoctorSpeciality(
//   Doctor.doctorsID,
//   Doctor.speciality
// );
// const DoctorHospital = await contract.addDoctorHospital(
//   Doctor.doctorsID,
//   Doctor.hospital
// );
// const DoctorGender = await contract.addDoctorGender(
//   Doctor.doctorsID,
//   Doctor.gender
// );
