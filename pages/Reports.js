import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import ReportForm from '../components/forms/ReportForm.js';
import { useRouter } from 'next/router';
import Redirect from '../components/cards/Redirect.js';
import useStorage from '../components/hooks/useStorage.js';

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
        <title>Reports</title>
      </Head>
      <Navbar />
      {getItem('address') ? <ReportForm /> : <Redirect />}
    </>
  );
}
