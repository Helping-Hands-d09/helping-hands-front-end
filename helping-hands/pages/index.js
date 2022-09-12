import Head from 'next/head'
import Hero from '../components/Hero'

import Header from '../components/Header'
// import Campaigns from '../components/Campaigns'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>  Helping Hands  </title>
      </Head>
      <Hero/>
      <main className='flex  justify-around'>
      </main>
    </>
  );
}
