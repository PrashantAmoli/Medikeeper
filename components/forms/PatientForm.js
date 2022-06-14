import { useRef, useState } from 'react';
import { validateID } from './validations.js';
import styles from '../../styles/Forms.module.css';
import PatientData from '../cards/PatientData.js';
import GetData from '../scripts/GetData.js';

export default function PatientForm() {
  const [ID, setID] = useState('');
  const [Patient, setPatient] = useState({
    patientsID: '',
    patientsName: '',
    number: '',
    address: '',
    allergies: '',
    gender: '',
    dob: '',
  });

  const IDRef = useRef();

  const { getPatient } = GetData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateID(IDRef.current.value.trim())) return false;
    await setID(IDRef.current.value.trim());

    const result = await getPatient();

    const data = { ...Patient };
    data.patientsName = result[0];
    data.patientsID = result[1];
    data.number = result[2];
    data.gender = result[3];
    data.adderss = result[4];
    data.allergies = result[5];

    console.log('Patient from state: ', JSON.stringify(data));

    await setPatient(data);

    return true;
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Patient ID" ref={IDRef} required />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
      <PatientData Patient={Patient} />
    </>
  );
}
