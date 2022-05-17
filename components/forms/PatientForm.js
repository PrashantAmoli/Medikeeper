import { useRef, useState } from 'react';
import { validateID } from './validations.js';
import styles from '../../styles/Forms.module.css';

export default function PatientForm() {
  const [ID, setID] = useState('');

  const IDRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateID(IDRef.current.value.trim())) return false;
    setID(IDRef.current.value.trim());
    return true;
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="password" placeholder="Patient ID" ref={IDRef} required />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
