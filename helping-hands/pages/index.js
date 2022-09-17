import Hero from '../components/Hero'

// import Campaigns from '../components/Campaigns'

import { useAuth } from '../contexts/Auth'
import { useContext } from "react";

export default function Home() {
  const { tokens } = useAuth()

  return (
    <>
   
      <Hero/>
      <main className='flex justify-around'>
      
      </main>
    </>
  );
}
