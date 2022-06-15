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
    gender: '',
    address: '',
    dob: '',
    allergies: '',
  });
  const [Report, setReport] = useState({
    patientsID: '',
    lastUpdated: '',
    currentMedicalDosage: '',
    updatedBy: '',
    diagnosis: '',
    pdf: '',
    pdfAll: '',
  });

  const IDRef = useRef();

  const { getPatient, getReport } = GetData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateID(IDRef.current.value.trim())) return false;
    await setID(IDRef.current.value.trim());

    const result = await getPatient(IDRef.current.value);

    const data = { ...Patient };
    data.patientsID = IDRef.current.value;
    data.patientsName = result[0];
    data.number = result[1];
    data.gender = result[2];
    data.address = result[3];
    data.dob = result[4];
    data.allergies = result[5];

    console.log('Patient from state: ', JSON.stringify(data));

    await setPatient(data);

    return true;
  };

  const handleReport = async (e) => {
    e.preventDefault();
    const data = { ...Report };
    const result = await getReport(IDRef.current.value);
    data.lastUpdated = result[0];
    data.currentMedicalDosage = result[1];
    data.updatedBy = result[2];
    data.diagnosis = result[3];
    data.pdf = `https://dweb.link/ipfs/${result[4]}`;
    data.pdfAll = result[5];
    await setReport(data);
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

      <form className={styles.form} onSubmit={handleReport}>
        <input type="text" placeholder="Patient ID" ref={IDRef} required />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
      <h3>{JSON.stringify(Report)}</h3>
      <h3>
        <a href={Report.pdf} target="_blank">
          View Report
        </a>
      </h3>
      {/* <PatientData Patient={Patient} /> */}
    </>
  );
}
