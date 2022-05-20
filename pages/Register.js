import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar.js';
import PatientRegistrationForm from '../components/forms/PatientRegistrationForm.js';
import DoctorRegistrationForm from '../components/forms/DoctorRegistrationForm.js';

export default function Register() {
  const [Form, setForm] = useState(true);

  const patientForm = () => {
    setForm(true);
  };
  const doctorForm = () => {
    setForm(false);
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Navbar />
      <div>
        {Form === true ? (
          <PatientRegistrationForm />
        ) : (
          <DoctorRegistrationForm />
        )}
      </div>
      <div>
        <button onClick={patientForm}>Patient Registration</button>
        <button onClick={doctorForm}>Doctor Registration</button>
      </div>
    </>
  );
}
