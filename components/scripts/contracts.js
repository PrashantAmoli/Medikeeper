// import Doctors from '../ABIs/Doctors.JSON';
import Web3 from 'web3';
import useStorage from '../hooks/useStorage.js';

const { getItem } = useStorage();

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
};

export const load = async () => {
  await loadWeb3();
};

export const getCurrentAccount = async () => {
  const accounts = await window.web3.eth.getAccounts();
  return accounts[0];
};

export const getDoc = async (ID) => {
  load();
  const account = await getCurrentAccount();
  // let account = '0xdac7771a245e9ca9269eb433293a2ac765bfd78d'; //Acc2

  let abi = [
    {
      inputs: [
        {
          internalType: 'contract Patients',
          name: '_patientsContractAddress',
          type: 'address',
        },
        {
          internalType: 'contract Doctors',
          name: '_doctorsContractAddress',
          type: 'address',
        },
        {
          internalType: 'contract Records',
          name: '_recordsContractAddress',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_doctorAddress',
          type: 'address',
        },
      ],
      name: 'addAuthorisedDoctor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x25da1c77',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x8da5cb5b',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'string',
          name: '_patientId',
          type: 'string',
        },
      ],
      name: 'getMedicalInfoPatient',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x22ae8cef',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'string',
          name: '_doctorId',
          type: 'string',
        },
      ],
      name: 'getMedicalInfoDoctor',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x9b781210',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'string',
          name: '_patientId',
          type: 'string',
        },
      ],
      name: 'getMedicalRecords',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xca08b7d1',
    },
  ];
  let getcontractaddress = '0x224d4d32b865321Ee5eadC6ce58BEf033dBdc93C';

  let getContract = await new web3.eth.Contract(abi, getcontractaddress);
  let id = ID;

  let result = await getContract.methods
    .getMedicalInfoDoctor(id)
    .call(function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        // document.getElementById('DoctorName').innerText = result[0];
        // document.getElementById('DoctorSpeciality').innerText = result[1];
        // document.getElementById('DoctorHospital').innerHTML = result[2];
        // document.getElementById('DoctorGender').innerHTML = result[3];
        console.log(` getDoctor returns: 
        ${result[0]}
        ${result[1]}
        ${result[2]}
        ${result[3]}
        `);
      }
    });
};

export const addDoc = async (Doctor) => {
  load();
  const account = await getCurrentAccount();
  let abi = [
    {
      inputs: [
        {
          internalType: 'contract Patients',
          name: '_patientsContractAddress',
          type: 'address',
        },
        {
          internalType: 'contract Doctors',
          name: '_doctorsContractAddress',
          type: 'address',
        },
        {
          internalType: 'contract Records',
          name: '_recordsContractAddress',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_doctorAddress',
          type: 'address',
        },
      ],
      name: 'addAuthorisedDoctor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x25da1c77',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x8da5cb5b',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_patientName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_patientId',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_patientMobileNumber',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_patientGender',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_patientAddress',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_patientDateOfBirth',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_allergiesKnown',
          type: 'string',
        },
      ],
      name: 'addMedicalInfoPatient',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xd956a48e',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_doctorName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_doctorId',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_doctorSpeciality',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_doctorHospital',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_doctorGender',
          type: 'string',
        },
      ],
      name: 'addMedicalInfoDoctor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x9b602be6',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_patientId',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_lastUpdated',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_currentMedicalDosage',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_updatedBy',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_currentDiagnosis',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_PDFreport',
          type: 'string',
        },
      ],
      name: 'addMedicalRecords',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x2b3df31d',
    },
  ];
  let addcontractaddress = '0x54618A04c7F60d3816C58d9aB10e3cE6B0B8e0bE';

  let addContract = await new web3.eth.Contract(abi, addcontractaddress);

  // let id = document.getElementById('doctorId').value;
  // let name =  document.getElementById('doctorName').value;
  // let speciality = document.getElementById('doctorSpeciality').value;
  // let hospital = document.getElementById('doctorHospital').value;
  // let gender = document.getElementById('doctorGender').value;
  // console.log(id);
  // console.log(name);
  // console.log(speciality);
  // console.log(hospital);
  // console.log(gender);

  let result = await addContract.methods
    .addMedicalInfoDoctor(name, id, speciality, hospital, gender)
    .send(
      {
        from: account,
      },
      function (err, result) {
        if (err) {
          console.log(err);
        }
      }
    );
};
