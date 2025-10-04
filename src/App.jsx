import Navbar from './navbar'
import './App.css'
import Banner from './banner'
import Players from './player'
import { Suspense, useState } from 'react';
import Select from "./select"
import SubmitEmail from './submitEmail'


function App() {

  const [toggle,setToggle]= useState(true);


    const Player = fetch('../public/player.json').then(res=>res.json());

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='flex justify-between items-center container mx-auto mt-15'>
      <div className='playerH1' >Available Players</div>
      <div className='flex items-center'>
        <div className={`${toggle === true ?"playerButton1":"playerButton2"}` } onClick={()=>setToggle(true)}>
            Available
        </div>
        <div className={`${toggle === true ?"playerButton2":"playerButton1"}` } onClick={()=>setToggle(false)}>
            Selected <span>(0)</span>
        </div>
      </div>
    </div>

    {
      toggle === true ?  <Suspense fallback={<p className='flex items-center justify-center'><span className="loading loading-infinity loading-xl "></span></p>}>
      <Players Player={Player}></Players>
    </Suspense>:<Select></Select>
    }
    <SubmitEmail></SubmitEmail>
    </>
  )
}

export default App
