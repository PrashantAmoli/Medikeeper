import styles from '../../styles/Forms.module.css';

export default function DoctorsForm() {
  return (
    <form className={styles.form}>
      <input type="password" placeholder="Doctor's ID" required />
      <input type="password" placeholder="Patient's ID" required />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
}
