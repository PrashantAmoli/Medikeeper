import styles from '../../styles/Forms.module.css';

export default function PatientForm() {
  return (
    <>
      <form className={styles.form}>
        <input type="password" placeholder="Patient ID" required />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
