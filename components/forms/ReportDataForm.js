import { useRef, useState } from 'react';
import { validateID } from './validations.js';
import styles from '../../styles/Forms.module.css';
import cardStyles from '../../styles/cards.module.css';
import PatientData from '../cards/PatientData.js';
import DoctorsData from '../cards/DoctorsData.js';
import Report from '../cards/Report.js';
import GetData from '../scripts/GetData.js';
import Modal from '../cards/Modal';

export default function ReportDataForm() {
  const [ID, setID] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [Message, setMessage] = useState('Something went wrong ⁉️ ');

  const [Patient, setPatient] = useState({
    patientsID: '',
    patientsName: '',
    number: '',
    gender: '',
    address: '',
    dob: '',
    allergies: '',
  });

  const [Doctor, setDoctor] = useState({
    doctorsID: '',
    doctorsName: '',
    speciality: '',
    hospital: '',
    gender: '',
  });

  const [Reports, setReports] = useState({
    patientsID: '',
    lastUpdated: '',
    currentMedicalDosage: '',
    updatedBy: '',
    diagnosis: '',
    pdf: '',
    pdfAll: '',
  });

  const IDRef = useRef();

  const { getPatient, getReport, getDoctor } = GetData();

  const getPatientData = async () => {
    const result = await getPatient(IDRef.current.value);

    const data = { ...Patient };
    data.patientsID = IDRef.current.value;
    data.patientsName = result[0];
    data.number = result[1];
    data.gender = result[2];
    data.address = result[3];
    data.dob = result[4];
    let allergies = result[5];

    if (data.patientsName == '' || data.patientsName == undefined) {
      let msg = `No patient exists with patient id ${IDRef.current.value} ⁉️`;
      await setMessage(msg);
      await setShowModal(true);
      return;
    }

    for (let i = 11; i < allergies.length; i++) {
      data.allergies += allergies[i];
    }

    await setPatient(data);
  };

  const getDoctorData = async (id) => {
    const result = await getDoctor(id);

    const doctor = { ...Doctor };
    doctor.doctorsID = id;
    doctor.doctorsName = result[0];
    doctor.speciality = result[1];
    doctor.hospital = result[2];
    doctor.gender = result[3];

    if (doctor.doctorsName == '' || doctor.doctorsName == undefined) {
      let msg = `No Doctor exists with patient id: ${IDRef.current.value}⁉️`;
      await setMessage(msg);
      await setShowModal(true);
      return;
    }
    await setDoctor(doctor);
  };

  const handleReport = async (e) => {
    e.preventDefault();

    let msg = 'Invalid Input: Please enter valid ID ⁉️  ';
    if (!validateID(IDRef.current.value)) {
      await setMessage(msg);
      await setShowModal(true);
      return;
    }

    await getPatientData();

    const data = { ...Reports };
    const result = await getReport(IDRef.current.value);
    data.patientsID = IDRef.current.value;
    data.lastUpdated = result[0];
    data.currentMedicalDosage = result[1];
    data.updatedBy = result[2];
    data.diagnosis = result[3];
    data.pdf = result[4];
    data.pdfAll = result[5];

    console.log('Result => ', JSON.stringify(data));
    if (
      data.pdf == '' ||
      data.pdf == undefined ||
      data.updatedBy == '' ||
      data.updatedBy == undefined
    ) {
      msg = `No report uploaded for patient ${Patient.patientsName} with id: ${IDRef.current.value}⁉️`;
      await setMessage(msg);
      await setShowModal(true);
      return;
    }

    console.log(data.pdfAll);
    await setReports(data);

    await getDoctorData(data.updatedBy);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleReport}>
        <input type="text" placeholder="Patient ID" ref={IDRef} required />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>

      <DoctorsData Doctor={Doctor} />
      <PatientData Patient={Patient} />
      <Report Data={Reports} />

      <section>
        {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
        {showModal && (
          <Modal onClose={() => setShowModal(false)} show={showModal}>
            {Message}
          </Modal>
        )}
      </section>
    </>
  );
}
