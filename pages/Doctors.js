import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import DoctorsForm from '../components/forms/DoctorsForm.js';

export default function Doctors() {
  return (
    <>
      <Head>
        <title>Doctors</title>
      </Head>
      <Navbar />
      <DoctorsForm />
    </>
  );
}
