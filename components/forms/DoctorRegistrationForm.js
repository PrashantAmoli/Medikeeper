import { useRef, useState } from 'react';
import { validateID, validateName } from './validations.js';
import styles from '../../styles/Forms.module.css';

export default function RegistrationForm() {
  const [Data, setData] = useState({
    doctorsID: '',
    speciality: '',
    doctorsName: '',
    hospitalsName: '',
    gender: '',
  });

  const specialityRef = useRef();
  const doctorsNameRef = useRef();
  const hospitalsNameRef = useRef();
  const doctorsIDRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { ...Data };

    if (validateID(doctorsIDRef.current.value.trim()))
      data.doctorsID = doctorsIDRef.current.value.trim();
    if (validateName(specialityRef.current.value.trim()))
      data.speciality = specialityRef.current.value.trim();
    if (validateName(doctorsNameRef.current.value.trim()))
      data.doctorsName = doctorsNameRef.current.value.trim();
    if (validateName(hospitalsNameRef.current.value.trim()))
      data.hospitalsName = hospitalsNameRef.current.value.trim();
    data.gender = gender;
    setData(data);

    return true;
  };

  let gender = 'Male';
  const setGender = (e) => {
    gender = e.target.value;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="doctor"
        className="doctor"
        placeholder="Doctor's Name"
        ref={doctorsNameRef}
      />
      <input
        type="text"
        name="speciality"
        className="speciality"
        placeholder="Speciality"
        ref={specialityRef}
      />
      <div className={styles.rowForm} onChange={setGender}>
        <label htmlFor="male">Male</label>
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="female" name="gender" value="Female" />
      </div>
      <input
        type="tel"
        name="doctors-id"
        className="doctors-id"
        placeholder="Doctor's Number"
        ref={doctorsIDRef}
      />
      <input
        type="text"
        name="hospital"
        className="hospital"
        placeholder="Hospital"
        ref={hospitalsNameRef}
      />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
      <div className={styles.state}>
        <span>{JSON.stringify(Data)}</span>
      </div>
    </form>
  );
}
