import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import RegistrationForm from '../components/forms/RegistrationForm.js';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <RegistrationForm />
    </>
  );
}
