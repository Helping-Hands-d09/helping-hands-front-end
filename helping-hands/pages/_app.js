import '../styles/globals.css'
import { AuthProvider } from "../contexts/Auth";
import Head from 'next/head'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import dynamic from "next/dynamic";


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Head>
        <title>  Helping Hands  </title>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <link rel="icon" href="image/hand-13.jpg" />

      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>

  )
}

// export default MyApp

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
