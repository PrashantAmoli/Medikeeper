import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import ReportForm from '../components/forms/ReportForm.js';

export default function Patients() {
  return (
    <>
      <Head>
        <title>Reports</title>
      </Head>
      <Navbar />
      <ReportForm />
    </>
  );
}
