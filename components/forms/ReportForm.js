import styles from '../../styles/Forms.module.css';

export default function ReportForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        name="patient-name"
        className="patient-name"
        placeholder="Patient's Name"
      />
      <input
        type="number"
        name="patient-id"
        className="patient-id"
        placeholder="Patient ID"
      />
      <div className={styles.rowForm}>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />
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
      <div className={styles.rowForm}>
        <label htmlFor="male">Male</label>
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="female" name="gender" value="Female" />
      </div>
      <input type="file" id="report" name="report" accept=".pdf,.doc" />
      <input
        type="text"
        name="hospital"
        className="hospital"
        placeholder="Hospital"
      />
      <input
        type="text"
        name="doctor"
        className="doctor"
        placeholder="Doctor's Name"
      />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
}
