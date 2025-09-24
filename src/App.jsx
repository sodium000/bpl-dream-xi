import Navbar from './navbar'
import './App.css'
import Banner from './banner'
import Players from './player'
import { Suspense } from 'react';

function App() {


    const Player = fetch('../public/player.json').then(res=>res.json());

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='flex justify-between items-center container mx-auto mt-15'>
      <div className='playerH1' >Available Players</div>
      <div className='flex items-center'>
        <div className='playerButton1'>
            Available
        </div>
        <div className='playerButton2'>
            Selected <span>(0)</span>
        </div>
      </div>
    </div>

      <Suspense fallback={<p>waiting for message...</p>}>
       <Players Player={Player}></Players>
    </Suspense>

   
    
    </>
  )
}

export default App
