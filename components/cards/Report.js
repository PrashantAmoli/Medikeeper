import styles from '../../styles/cards.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Report = ({ Data }) => {
  const [Reports, setReports] = useState([]);

  useEffect(() => {
    let reports = Data.pdfAll.split(', ');
    // reports = reports.shift();
    setReports(reports);
  }, [Data]);

  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.head}>Report</h2>
        <br />
        <h3>Patient's ID: &nbsp;{Data.patientsID}</h3>
        <h3>Doctor's ID: &ensp;{Data.updatedBy}</h3>
        <h3>Updated on: &ensp;{Data.lastUpdated}</h3>
        <h3>Diagnosis: &emsp; {Data.diagnosis}</h3>
        <h3>Prescription: {Data.currentMedicalDosage}</h3>
        <h3>
          Report File: &ensp;
          {Data.pdf != '' &&
          Data.pdf != `https://dweb.link/ipfs/` &&
          Data.pdf.includes(`https://dweb.link/ipfs/`, 0) ? (
            <>
              <div className={styles.head}>
                <embed
                  src={`${Data.pdf}`}
                  width={'100%'}
                  height={'400px'}
                  type="application/pdf"
                />
              </div>
              <span>
                <a href={Data.pdf} target="_blank">
                  Open Full Report in new tab
                </a>
              </span>
            </>
          ) : (
            <></>
          )}
        </h3>
        {Reports.length > 0 ? <h3>Medical History:</h3> : <></>}
        {Reports.map((report) => {
          if (
            report != `https://dweb.link/ipfs/` &&
            report.includes(`https://dweb.link/ipfs/`, 0)
          )
            return (
              <>
                <div className={styles.head}>
                  <embed
                    src={`${report}`}
                    width={'100%'}
                    height={'400px'}
                    type="application/pdf"
                  />
                </div>
                <span className={styles.head}>
                  <a href={report} target="_blank">
                    Open Full Report in new tab
                  </a>
                </span>
              </>
            );
        })}
        {Reports.length > 0 ? (
          <>
            {/* <Image
            loader={myLoader}
            src="https://2.bp.blogspot.com/-ncGX0FKJ0fU/XIwzD9MIFnI/AAAAAAA0Zyk/Ipwx0p9BxGgD0uJ6fOy6vumbBvtnEfGVgCLcBGAs/s1600/AW3717982_01.gif"
            alt="Report"
            width={500}
            height={400}
          /> */}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Report;
