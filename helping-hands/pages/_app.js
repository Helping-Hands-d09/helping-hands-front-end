import '../styles/globals.css'
import { AuthWrapper } from "../contexts/Auth";
import Head from 'next/head'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  return (
    <AuthWrapper>
      <Head>
        <title>  Helping Hands  </title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AuthWrapper>

  )
}

export default MyApp
