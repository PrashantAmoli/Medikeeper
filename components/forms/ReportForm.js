import { useRef, useState } from 'react';
import { validateID, validateName } from './validations.js';
import styles from '../../styles/Forms.module.css';
import AddData from '../scripts/AddData.js';

export default function ReportForm() {
  const [Data, setData] = useState({
    patientsID: '',
    lastUpdated: '',
    currentMedicalDosage: '',
    updatedBy: '',
    diagnosis: '',
    pdf: '',
  });

  const patientsIDRef = useRef();
  const doctorsIDRef = useRef();
  const diagnosisRef = useRef();
  const prescriptionRef = useRef();
  const dobRef = useRef();

  const { addRecord } = AddData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = { ...Data };

    if (validateID(patientsIDRef.current.value.trim()))
      data.patientsID = patientsIDRef.current.value;

    if (validateID(doctorsIDRef.current.value.trim()))
      data.updatedBy = doctorsIDRef.current.value;

    if (validateName(diagnosisRef.current.value.trim()))
      data.diagnosis = diagnosisRef.current.value;

    if (validateName(prescriptionRef.current.value.trim()))
      data.currentMedicalDosage = prescriptionRef.current.value;

    data.lastUpdated = String(dobRef.current.value);
    data.pdf = 'bafybeifynkhsnf63nsriir56zdox3fa5o62hejotpj3zzpemzztceiqauy';
    await setData(data);

    await addRecord(data);

    return true;
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="doctor"
          className="doctor"
          placeholder="Doctor's ID"
          ref={doctorsIDRef}
        />
        <input
          type="text"
          name="patient-id"
          className="patient-id"
          placeholder="Patient ID"
          ref={patientsIDRef}
        />
        <div className={styles.rowForm}>
          <label htmlFor="dob">Date:</label>
          <input type="date" id="dob" name="dob" ref={dobRef} />
        </div>
        <div className={styles.rowForm}>
          <input type="file" id="report" name="report" accept=".pdf" />
        </div>
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

        {/* <div className={styles.state}>
          <span>{JSON.stringify(Data)}</span>
        </div> */}
      </form>
    </>
  );
}
