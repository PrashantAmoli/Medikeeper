import { useRef, useState } from 'react';
import { validateID } from './validations.js';
import styles from '../../styles/Forms.module.css';
// import useDoctors from '../hooks/useDoctors.js';
import GetData from '../scripts/GetData.js';
import DoctorsData from '../cards/DoctorsData.js';

export default function DoctorsForm() {
  const [ID, setID] = useState('');
  const [Doctor, setDoctor] = useState({});

  const IDRef = useRef();

  // * using Custom hook to interact with Contract
  // const { connect, account, user, getDoctor } = useDoctors();
  const { getDoctor } = GetData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateID(IDRef.current.value.trim())) return false;
    else await setID(IDRef.current.value);
    // await getDoctor(ID);
    console.log('ID state: ', ID);
    const resData = await getDoctor(ID);
    const doctor = {
      doctorsID: ID,
      doctorsName: resData[0],
      speciality: resData[1],
      hospital: resData[2],
      gender: resData[3],
    };
    await setDoctor(doctor);
    return true;
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Doctor's ID" ref={IDRef} required />
        {/* <input type="text" placeholder="Patient's ID" /> */}
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
      <DoctorsData Doctor={Doctor} />
    </>
  );
}
