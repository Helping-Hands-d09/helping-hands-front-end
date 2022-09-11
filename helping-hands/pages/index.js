import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Campaigns from '../components/Campaigns'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head></Head>
      <main className='flex  justify-around'>
        <Campaigns />
      </main>
    </>
  );
}
