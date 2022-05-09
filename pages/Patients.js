import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import PatientForm from '../components/forms/PatientForm.js';

export default function Reports() {
  return (
    <>
      <Head>
        <title>Patients</title>
      </Head>
      <Navbar />
      <PatientForm />
    </>
  );
}
