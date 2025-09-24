import Navbar from './navbar'
import './App.css'
import Banner from './banner'
import Player from './player'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
     <div className='flex justify-between items-center container mx-auto mt-15'>
      <div className='playerH1'>Available Players</div>
      <div className='flex items-center'>
        <div className='playerButton1'>
            Available
        </div>
        <div className='playerButton2'>
            Selected <span>(0)</span>
        </div>
      </div>
    </div>
    <Player></Player>
    </>
  )
}

export default App
