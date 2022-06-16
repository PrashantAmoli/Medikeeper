import Head from 'next/head';
import { useState, useRef } from 'react';
import styles from '../styles/Forms.module.css';
import Admin from '../components/scripts/Admin.js';
import Navbar from '../components/Navbar.js';

const AdminPanel = () => {
  const [Address, setAddress] = useState('');
  const { addAuthentication, removeAuthentication } = Admin();

  const addressRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    return true;
  };

  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />
      <form className={styles.form}>
        <h2>Admin Panel</h2>
        <input
          type="text"
          placeholder="Doctor's Account Address"
          ref={addressRef}
          required
        />
        <button
          type="submit"
          className={styles.btn}
          onClick={() => addAuthentication(addressRef.current.value)}
        >
          Authorize
        </button>
        <button
          type="submit"
          className={styles.btn}
          onClick={() => removeAuthentication(addressRef.current.value)}
        >
          Unauthorize
        </button>
      </form>
    </>
  );
};

export default AdminPanel;
