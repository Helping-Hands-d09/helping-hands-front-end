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
      {/* <Script
        id="stripe-js"
        src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
        onLoad={() => {
          console.log("has been loaded");
        }}
      /> */}
      {/* <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script> */}
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
