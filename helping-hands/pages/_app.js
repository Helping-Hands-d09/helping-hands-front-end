import '../styles/globals.css'
import { AuthProvider } from "../contexts/Auth";
import Head from 'next/head'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Head>
      <link rel="icon" href="image/hand-13.jpg" />
        <title> Helping Hands </title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>

  )
}

export default MyApp
