import Head from 'next/head'


import Header from '../components/Header'
import Campaigns from '../components/Campaigns'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Head>
        <title>  Helping Hands  </title>
        </Head>
      <main className='flex  justify-around'>
        <Campaigns />
      </main>
    </>
  );
}
