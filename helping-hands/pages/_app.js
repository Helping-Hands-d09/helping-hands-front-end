import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>  Helping Hands  </title>
      </Head>
      <Header />
        <Component {...pageProps} />
      <Footer/>
    </>
)}

export default MyApp
