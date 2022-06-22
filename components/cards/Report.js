import styles from '../../styles/cards.module.css';
import { useState, useEffect } from 'react';

const Report = ({ Data }) => {
  const [Reports, setReports] = useState([]);

  useEffect(() => {
    let reports = Data.pdfAll.split(', ');
    reports.shift();
    setReports(reports);
  }, [Data]);

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.head}>Report</h2>
        <br />
        <h3>Patient's ID: {Data.patientsID}</h3>
        <h3>Doctor's ID: {Data.updatedBy}</h3>
        <h3>Updated on: {Data.lastUpdated}</h3>
        <h3>Diagnosis: {Data.diagnosis}</h3>
        <h3>Prescription: {Data.currentMedicalDosage}</h3>
        <h3>
          Report File:
          {Data.pdf != '' ? (
            <span>
              <a href={Data.pdf}>View Report</a>
            </span>
          ) : (
            <></>
          )}
        </h3>
        {Reports.length > 0 ? <h3>Previous Reports:</h3> : <></>}
        {Reports.map((report) => {
          return (
            <>
              <span className={styles.head}>
                <a href={report}>View Report</a>
              </span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Report;
