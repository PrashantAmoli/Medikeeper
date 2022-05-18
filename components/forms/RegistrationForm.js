import { useRef, useState } from 'react';
import { validateID, validateName } from './validations.js';
import styles from '../../styles/Forms.module.css';

export default function RegistrationForm() {
  const [Data, setData] = useState({
    patientsID: '',
    patientsName: '',
    doctorsName: '',
    hospitalsName: '',
    gender: '',
    dob: '',
  });

  const patientsIDRef = useRef();
  const patientsNameRef = useRef();
  const doctorsNameRef = useRef();
  const hospitalsNameRef = useRef();
  const doctorsIDRef = useRef();
  const genderRef = useRef();
  const dobRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { ...Data };

    if (validateID(patientsIDRef.current.value.trim()))
      data.patientsID = patientsIDRef.current.value.trim();
    if (validateName(patientsNameRef.current.value.trim()))
      data.patientsName = patientsNameRef.current.value.trim();
    if (validateName(doctorsNameRef.current.value.trim()))
      data.doctorsName = doctorsNameRef.current.value.trim();
    if (validateName(hospitalsNameRef.current.value.trim()))
      data.hospitalsName = hospitalsNameRef.current.value.trim();
    data.dob = dobRef.current.value;
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
        name="patient-name"
        className="patient-name"
        placeholder="Patient's Name"
        ref={patientsNameRef}
      />
      <input
        type="tel"
        name="phone-number"
        className="phone-number"
        placeholder="Phone Number"
      />
      <div className={styles.rowForm}>
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" ref={dobRef} />
      </div>
      <div className={styles.rowForm} onChange={setGender}>
        <label htmlFor="male">Male</label>
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="female" name="gender" value="Female" />
      </div>
      <textarea
        name="patients-address"
        id="patients-address"
        cols="20"
        rows="4"
        placeholder="Address"
      ></textarea>
      <textarea
        name="allergies"
        id="allergies"
        cols="20"
        rows="4"
        placeholder="Allergies"
      ></textarea>
      {/* <input
        type="number"
        name="patient-id"
        className="patient-id"
        placeholder="Patient ID"
        ref={patientsIDRef}
      /> */}
      {/* <input type="file" id="report" name="report" accept=".pdf" /> */}
      {/* <input
        type="text"
        name="hospital"
        className="hospital"
        placeholder="Hospital"
        ref={hospitalsNameRef}
      />
      <input
        type="text"
        name="doctor"
        className="doctor"
        placeholder="Doctor's Name"
        ref={doctorsNameRef}
      /> */}
      <button type="submit" className={styles.btn}>
        Submit
      </button>
      <h3>{JSON.stringify(Data)}</h3>
    </form>
  );
}
