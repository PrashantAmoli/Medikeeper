import { useRef, useState } from 'react';
import { validateID, validateName } from './validations.js';
import styles from '../../styles/Forms.module.css';

export default function ReportForm() {
  const [Data, setData] = useState({
    patientsID: '',
    patientsName: '',
    doctorsName: '',
    hospitalsName: '',
    gender: '',
    dob: '',
    diagnosis: '',
    prescription: '',
  });

  const patientsIDRef = useRef();
  const patientsNameRef = useRef();
  const doctorsNameRef = useRef();
  const hospitalsNameRef = useRef();
  const diagnosisRef = useRef();
  const prescriptionRef = useRef();
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
    if (validateName(diagnosisRef.current.value.trim()))
      data.diagnosis = diagnosisRef.current.value.trim();
    if (validateName(prescriptionRef.current.value.trim()))
      data.prescription = prescriptionRef.current.value.trim();
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
        type="number"
        name="patient-id"
        className="patient-id"
        placeholder="Patient ID"
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
      <div className={styles.rowForm}>
        <input type="file" id="report" name="report" accept=".pdf" />
      </div>
      <input
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
      />
      <textarea
        name="diagnosis"
        id="diagnosis"
        cols="20"
        rows="4"
        placeholder="Diagnosis :"
        ref={diagnosisRef}
      ></textarea>
      <textarea
        name="prescription"
        id="prescription"
        cols="20"
        rows="4"
        placeholder="Prescription :"
        ref={prescriptionRef}
      ></textarea>
      <button type="submit" className={styles.btn}>
        Submit
      </button>

      <div className={styles.state}>
        <span>{JSON.stringify(Data)}</span>
      </div>
      {/* <input
        type="text"
        name="phone-number"
        className="phone-number"
        placeholder="Phone Number"
        />
        <textarea
        name="patients-address"
        id="patients-address"
        cols="20"
        rows="4"
        placeholder="Address"
      ></textarea> */}
    </form>
  );
}
