import { useRef, useState } from 'react';
import { validateID, validateName, validateAddress } from './validations.js';
import styles from '../../styles/Forms.module.css';

export default function PatientRegistrationForm() {
  const [Data, setData] = useState({
    patientsID: '',
    patientsName: '',
    number: '',
    address: '',
    allergies: [],
    gender: '',
    dob: '',
  });

  const patientsIDRef = useRef();
  const patientsNameRef = useRef();
  const hospitalsNameRef = useRef();
  const addressRef = useRef();
  const allergiesRef = useRef();
  const dobRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { ...Data };

    data.number = patientsIDRef.current.value.replace(/\s+/g, ' ').trim();
    let num = data.number;
    num = `${num}${num.charAt(0)}${num.charAt(1)}`;

    if (validateID(num)) data.patientsID = num;
    if (validateName(patientsNameRef.current.value.replace(/\s+/g, ' ').trim()))
      data.patientsName = patientsNameRef.current.value
        .replace(/\s+/g, ' ')
        .trim();
    if (validateAddress(addressRef.current.value.replace(/\s+/g, ' ').trim()))
      data.address = addressRef.current.value.replace(/\s+/g, ' ').trim(); // remove extra spaces
    let allergies = allergiesRef.current.value.replace(/\s+/g, '').trim(); // remove all spaces
    if (allergies.length > 3) {
      allergies = allergies.split(',');
      let temp = data.allergies.concat(allergies);
      allergies = [...new Set([...data.allergies, ...allergies])];
      data.allergies = [...allergies];
      console.log(allergies);
    }
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
        ref={patientsIDRef}
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
        ref={addressRef}
      ></textarea>
      <textarea
        name="allergies"
        id="allergies"
        cols="20"
        rows="4"
        placeholder="Allergies"
        ref={allergiesRef}
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
      <div className={styles.state}>
        <span>{JSON.stringify(Data)}</span>
      </div>
    </form>
  );
}
