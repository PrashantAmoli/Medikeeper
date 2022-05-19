import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import PatientRegistrationForm from '../components/forms/PatientRegistrationForm.js';
import DoctorRegistrationForm from '../components/forms/DoctorRegistrationForm.js';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Navbar />
      <div>
        <PatientRegistrationForm />
        <DoctorRegistrationForm />
      </div>
    </>
  );
}
