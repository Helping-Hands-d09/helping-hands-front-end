import Hero from '../components/Hero'

// import Campaigns from '../components/Campaigns'

import { AuthContext } from "../contexts/Auth";
import { useContext } from "react";

export default function Home() {
  const { tokens } = useContext(AuthContext)

  return (
    <>
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
