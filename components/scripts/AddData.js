import Web3 from 'web3';
import AddMedicalInfo from '../ABIs/AddMedicalInfo.json';
import { useState, useEffect } from 'react';

const AddMedicalInfoABI = AddMedicalInfo.abi;
const contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';

const AddData = () => {
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

  const addDoctor = async (Doctor) => {
    load();

    const account = await getCurrentAccount();
    const contract = await new web3.eth.Contract(
      AddMedicalInfoABI,
      contractAddress
    );

    const result = await contract.methods
      .addMedicalInfoDoctor(
        String(Doctor.doctorsName),
        String(Doctor.doctorsID),
        String(Doctor.speciality),
        String(Doctor.hospital),
        String(Doctor.gender)
      )
      .send(
        {
          from: account,
        },
        (err, result) => {
          if (err) console.log(err);
          else if (result) console.log(result);
        }
      );
    console.log('Result', JSON.stringify(result));
  };

  return { addDoctor };
};

export default AddData;

// async function getDoc() {
//   load();
//   const account = await getCurrentAccount();
//   var getcontractaddress = '0xe6331964F76957523667B115FdeF0278e0E8647a';

//   var getContract = await new web3.eth.Contract(abi, getcontractaddress);
//   var id = document.getElementById('DoctorId').value;
//   var result = await getContract.methods
//     .getMedicalInfoDoctor(id)
//     .call(function (err, result) {
//       if (err) {
//         console.log(err);
//       }
//       if (result) {
//         document.getElementById('DoctorName').innerText = result[0];
//         document.getElementById('DoctorSpeciality').innerText = result[1];
//         document.getElementById('DoctorHospital').innerHTML = result[2];
//         document.getElementById('DoctorGender').innerHTML = result[3];
//       }
//     });
// }

// async function addDoc() {
//   load();
//   const account = await getCurrentAccount();
//   console.log('252 Account : ', account);
//   var abi = [
//     {
//       inputs: [
//         {
//           internalType: 'contract Patients',
//           name: '_patientsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Doctors',
//           name: '_doctorsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Records',
//           name: '_recordsContractAddress',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'constructor',
//       signature: 'constructor',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'addAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x25da1c77',
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'owner',
//       outputs: [
//         {
//           internalType: 'address',
//           name: '',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x8da5cb5b',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'removeAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x42d68838',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientName',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientMobileNumber',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientGender',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientAddress',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientDateOfBirth',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_allergiesKnown',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalInfoPatient',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0xd956a48e',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_doctorName',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorSpeciality',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorHospital',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorGender',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalInfoDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x9b602be6',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_lastUpdated',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_currentMedicalDosage',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_updatedBy',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_currentDiagnosis',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_PDFreport',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalRecords',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x2b3df31d',
//     },
//   ];
//   var addcontractaddress = '0xe6331964F76957523667B115FdeF0278e0E8647a';

//   var addContract = await new web3.eth.Contract(abi, addcontractaddress);
//   var id = document.getElementById('doctorId').value;
//   var name = document.getElementById('doctorName').value;
//   var speciality = document.getElementById('doctorSpeciality').value;
//   var hospital = document.getElementById('doctorHospital').value;
//   var gender = document.getElementById('doctorGender').value;
//   console.log(id);
//   console.log(name);
//   console.log(speciality);
//   console.log(hospital);
//   console.log(gender);
//   var result = await addContract.methods
//     .addMedicalInfoDoctor(name, id, speciality, hospital, gender)
//     .send(
//       {
//         from: account,
//       },
//       function (err, result) {
//         if (err) {
//           console.log(err);
//         }
//       }
//     );
// }

// async function addAuth() {
//   load();
//   const account = await getCurrentAccount();
//   var abiAdd = [
//     {
//       inputs: [
//         {
//           internalType: 'contract Patients',
//           name: '_patientsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Doctors',
//           name: '_doctorsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Records',
//           name: '_recordsContractAddress',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'constructor',
//       signature: 'constructor',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'addAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x25da1c77',
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'owner',
//       outputs: [
//         {
//           internalType: 'address',
//           name: '',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x8da5cb5b',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'removeAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x42d68838',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientName',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientMobileNumber',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientGender',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientAddress',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientDateOfBirth',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_allergiesKnown',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalInfoPatient',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0xd956a48e',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_doctorName',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorSpeciality',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorHospital',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorGender',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalInfoDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x9b602be6',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_lastUpdated',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_currentMedicalDosage',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_updatedBy',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_currentDiagnosis',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_PDFreport',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalRecords',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x2b3df31d',
//     },
//   ];

//   var abiGet = [
//     {
//       inputs: [
//         {
//           internalType: 'contract Patients',
//           name: '_patientsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Doctors',
//           name: '_doctorsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Records',
//           name: '_recordsContractAddress',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'constructor',
//       signature: 'constructor',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'addAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x25da1c77',
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'owner',
//       outputs: [
//         {
//           internalType: 'address',
//           name: '',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x8da5cb5b',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'removeAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x42d68838',
//     },
//     {
//       constant: true,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//       ],
//       name: 'getMedicalInfoPatient',
//       outputs: [
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x22ae8cef',
//     },
//     {
//       constant: true,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_doctorId',
//           type: 'string',
//         },
//       ],
//       name: 'getMedicalInfoDoctor',
//       outputs: [
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x9b781210',
//     },
//     {
//       constant: true,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//       ],
//       name: 'getMedicalRecords',
//       outputs: [
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0xca08b7d1',
//     },
//   ];

//   var addcontractaddress = '0xfB3661D5b5509eFa43307eD59D59e06aFDF7168E';
//   var getcontractaddress = '0x919caa3D355A4C7e7016f3D85204e89C8874D5A2';

//   var addAuth = await new web3.eth.Contract(abiAdd, addcontractaddress);
//   var getAuth = await new web3.eth.Contract(abiGet, getcontractaddress);

//   var doctorAddress = document.getElementById('addressDoctor').value;

//   var resultAdd = await addAuth.methods.addAuthorisedDoctor(addressDoctor).send(
//     {
//       from: account,
//     },
//     function (err, resultAdd) {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );

//   var resultGet = await getAuth.methods.addAuthorisedDoctor(addressDoctor).send(
//     {
//       from: account,
//     },
//     function (err, resultGet) {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
// }

// async function removeAuth() {
//   load();
//   const account = await getCurrentAccount();
//   var abiAdd = [
//     {
//       inputs: [
//         {
//           internalType: 'contract Patients',
//           name: '_patientsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Doctors',
//           name: '_doctorsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Records',
//           name: '_recordsContractAddress',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'constructor',
//       signature: 'constructor',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'addAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x25da1c77',
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'owner',
//       outputs: [
//         {
//           internalType: 'address',
//           name: '',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x8da5cb5b',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'removeAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x42d68838',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientName',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientMobileNumber',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientGender',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientAddress',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_patientDateOfBirth',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_allergiesKnown',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalInfoPatient',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0xd956a48e',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_doctorName',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorSpeciality',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorHospital',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_doctorGender',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalInfoDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x9b602be6',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_lastUpdated',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_currentMedicalDosage',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_updatedBy',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_currentDiagnosis',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '_PDFreport',
//           type: 'string',
//         },
//       ],
//       name: 'addMedicalRecords',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x2b3df31d',
//     },
//   ];

//   var abiGet = [
//     {
//       inputs: [
//         {
//           internalType: 'contract Patients',
//           name: '_patientsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Doctors',
//           name: '_doctorsContractAddress',
//           type: 'address',
//         },
//         {
//           internalType: 'contract Records',
//           name: '_recordsContractAddress',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'constructor',
//       signature: 'constructor',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'addAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x25da1c77',
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'owner',
//       outputs: [
//         {
//           internalType: 'address',
//           name: '',
//           type: 'address',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x8da5cb5b',
//     },
//     {
//       constant: false,
//       inputs: [
//         {
//           internalType: 'address',
//           name: '_doctorAddress',
//           type: 'address',
//         },
//       ],
//       name: 'removeAuthorisedDoctor',
//       outputs: [],
//       payable: false,
//       stateMutability: 'nonpayable',
//       type: 'function',
//       signature: '0x42d68838',
//     },
//     {
//       constant: true,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//       ],
//       name: 'getMedicalInfoPatient',
//       outputs: [
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x22ae8cef',
//     },
//     {
//       constant: true,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_doctorId',
//           type: 'string',
//         },
//       ],
//       name: 'getMedicalInfoDoctor',
//       outputs: [
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x9b781210',
//     },
//     {
//       constant: true,
//       inputs: [
//         {
//           internalType: 'string',
//           name: '_patientId',
//           type: 'string',
//         },
//       ],
//       name: 'getMedicalRecords',
//       outputs: [
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//         {
//           internalType: 'string',
//           name: '',
//           type: 'string',
//         },
//       ],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0xca08b7d1',
//     },
//   ];

//   var addcontractaddress = '0xfB3661D5b5509eFa43307eD59D59e06aFDF7168E';
//   var getcontractaddress = '0x919caa3D355A4C7e7016f3D85204e89C8874D5A2';

//   var addAuth = await new web3.eth.Contract(abiAdd, addcontractaddress);
//   var getAuth = await new web3.eth.Contract(abiGet, getcontractaddress);

//   var removeAddressDoctor = document.getElementById(
//     'removeAddressDoctor'
//   ).value;

//   console.log(removeAddressDoctor);

//   var resultAdd = await addAuth.methods
//     .removeAuthorisedDoctor(removeAddressDoctor)
//     .send(
//       {
//         from: account,
//       },
//       function (err, resultAdd) {
//         if (err) {
//           console.log(err);
//         }
//       }
//     );

//   var resultGet = await getAuth.methods
//     .removeAuthorisedDoctor(removeAddressDoctor)
//     .send(
//       {
//         from: account,
//       },
//       function (err, resultGet) {
//         if (err) {
//           console.log(err);
//         }
//       }
//     );
// }
