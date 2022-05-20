import { useRef, useState } from 'react';
import { validateID } from './validations.js';
import styles from '../../styles/Forms.module.css';

export default function DoctorsForm() {
  const [ID, setID] = useState('');

  const IDRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateID(IDRef.current.value.trim())) return false;
    setID(IDRef.current.value.trim());
    return true;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="password" placeholder="Doctor's ID" ref={IDRef} required />
      <input type="password" placeholder="Patient's ID" required />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
}
