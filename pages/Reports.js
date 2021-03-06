import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import ReportForm from '../components/forms/ReportForm.js';
import ReportDataForm from '../components/forms/ReportDataForm.js';
import { useRouter } from 'next/router';
import Redirect from '../components/cards/Redirect.js';
import useSession from '../components/hooks/useSession.js';
import styles from '../styles/cards.module.css';

export default function Reports() {
  const [Form, setForm] = useState(true);
  const router = useRouter();
  const { getItem } = useSession();

  const AddForm = () => setForm(true);
  const GetForm = () => setForm(false);
  let pointerEvent = 'none';

  useEffect(() => {
    setTimeout(() => {
      if (!getItem('address')) {
        pointerEvent = 'none';
        router.push('/');
      } else {
        pointerEvent = 'all';
      }
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Reports</title>
      </Head>

      <Navbar />

      <div className={`${styles.card}`}>
        <h2 className={styles.head}>Report</h2>
        <div className={`${styles.row}`}>
          <button onClick={AddForm}>Add Report</button>
          <button onClick={GetForm}>Get Report</button>
        </div>
      </div>

      {getItem('address') ? <></> : <Redirect />}

      <section style={{ PointerEvents: `${pointerEvent}` }}>
        {Form === true ? <ReportForm /> : <ReportDataForm />}
      </section>
    </>
  );
}
