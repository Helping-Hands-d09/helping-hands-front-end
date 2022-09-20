import Hero from '../components/Hero'

// import Campaigns from '../components/Campaigns'

import { useAuth } from '../contexts/Auth'
import { useContext } from "react";
import Script from 'next/script'

export default function Home() {
  const { tokens, userInfo } = useAuth()
  console.log(userInfo);

  return (
    <>
      {/* {
        tokens ? 
        <main className='flex justify-around'>
          <h1>Helloooooooooooooooooooo</h1>
        </main>
        :
        <Hero />
      } */}

      <Hero />
    </>
  );
}
