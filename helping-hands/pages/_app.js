import '../styles/globals.css'
import { AuthWrapper } from "../contexts/Auth";
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  return (
    <AuthWrapper>
      <Head>
        <title>  Helping Hands  </title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthWrapper>

  )
}

export default MyApp
