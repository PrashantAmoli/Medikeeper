import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Welcome from '../components/cards/Welcome.js';
import Footer from '../components/cards/Footer.js';
import Metamask from '../components/scripts/Metamask.js';
import Navbar from '../components/Navbar.js';
import Modal from '../components/cards/Modal';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Head>
        <title>Home</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="../components/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="../components/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="../components/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../components/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="../components/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="../components/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="../components/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="../components/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../components/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="../components/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../components/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../components/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../components/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../components/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Welcome />
      </div>
      <div>
        {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
        {showModal && (
          <Modal onClose={() => setShowModal(false)} show={showModal}>
            Hello from the modal!
          </Modal>
        )}
      </div>
      <Metamask />
      <Footer />
    </>
  );
}
