import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import PatientForm from '../components/forms/PatientForm.js';
import Redirect from '../components/cards/Redirect.js';
import useStorage from '../components/hooks/useStorage.js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Reports() {
  const router = useRouter();
  const { getItem } = useStorage();

  useEffect(() => {
    setTimeout(() => {
      if (!getItem('address')) router.push('/');
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Patients </title>
      </Head>
      <Navbar />
      {getItem('address') ? <PatientForm /> : <Redirect />}
    </>
  );
}
