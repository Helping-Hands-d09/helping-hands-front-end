import '../styles/globals.css'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="image/hand-13.jpg" />
        <title> Helping Hands </title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );}

export default MyApp
