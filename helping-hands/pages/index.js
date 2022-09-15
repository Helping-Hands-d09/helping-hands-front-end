import Hero from '../components/Hero'

// import Campaigns from '../components/Campaigns'

import { useAuth } from '../contexts/Auth'
import { useContext } from "react";

export default function Home() {
  const { tokens } = useAuth()

  return (
    <>
    <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
      {
        tokens ? 
        <main className='flex  justify-around'>
          <h1>Helloooooooooooooooooooo</h1>
        </main>
        :
        <Hero />
      }
    </>
  );
}
