import { useRef, useState } from 'react';
import { validateID } from './validations.js';
import styles from '../../styles/Forms.module.css';
import useDoctors from '../hooks/useDoctors.js';
import DoctorsData from '../cards/DoctorsData.js'

export default function DoctorsForm() {
  const [ID, setID] = useState('');
  const [Doctor, setDoctor] = useState({});

  const IDRef = useRef();

  // * using Custom hook to interact with Contract
  const { connect, account, user, getDoctor } = useDoctors();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateID(IDRef.current.value.trim())) return false;
    await setID(IDRef.current.value.trim());
    await getDoctor(ID);
    return true;
  };

  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="password" placeholder="Doctor's ID" ref={IDRef} required />
      <input type="password" placeholder="Patient's ID" required />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
    <DoctorsData Doctor= {Doctor} />
    </>
  );
}
