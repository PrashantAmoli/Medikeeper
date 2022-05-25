import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Welcome from '../components/cards/Welcome.js';
import Metamask from '../components/scripts/Metamask.js';
import Navbar from '../components/Navbar.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Welcome />
      </div>
      <Metamask />
    </>
  );
}
//
