import styles from '../../styles/cards.module.css';

const Report = () => {
  return (
    <>
      <div className={styles.card}>
        <h2>Report</h2>
        <br />
        <h3>Name: Report.Name</h3>
        <h3>DOB: Report.DOB</h3>
        <h3>Gender: Report.Gender</h3>
        <h3>Hospital: Report.Hospital</h3>
        <h3>Doctor: Report.Doctor</h3>
        <h3>
          File: <a href="/1">Report.pdf</a>
        </h3>
      </div>
    </>
  );
};

export default Report;
