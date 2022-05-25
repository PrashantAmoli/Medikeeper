import styles from '../../styles/cards.module.css';

const PatientData = () => {
  return (
    <>
      <div className={styles.card}>
        <h2>Patient Data</h2>
        <br />
        <h3>Name: Patient.Name</h3>
        <h3>Phone: Patient.Phone</h3>
        <h3>DOB: Patient.DOB</h3>
        <h3>Gender: Patient.Gender</h3>
        <h3>Address: Patient.Address</h3>
        <h3>Allergies: Patient.Allergies</h3>
      </div>
    </>
  );
};

export default PatientData;
