import styles from '../../styles/cards.module.css';

const DoctorsData = () => {
  return (
    <>
      <div className={styles.card}>
        <h2>Doctors Data</h2>
        <br />
        <h3>Name: Doctors.Name</h3>
        <h3>Gender: Doctors.Gender</h3>
        <h3>Speciality: Doctors.Speciality</h3>
        <h3>Hospital: Doctors.Hospital</h3>
        <h3>Phone: Doctors.Phone</h3>
      </div>
    </>
  );
};

export default DoctorsData;
