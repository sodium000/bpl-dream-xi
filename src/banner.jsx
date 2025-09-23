import React from 'react'
import '../css/banner.css'


export default function banner() {
  return (
    <>
    <div className='container mx-auto flex flex-col justify-center items-center mt-20 gap-4 banner-container bg-linear-to-bl from-[#e07b7b] via-[#000000] to-[#4da0c0]  ' >
        <div>
          <img src="../public/assets/banner-main.png" alt="" />
        </div>
        <h1 className='bannerH1'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className='bannerP1'>
          Beyond Boundaries Beyond Limits
        </p>
        <div className='mainbutton'>
          <div className='BUTOON'>
            <button className='buttonText'>
            Claim Free Credit
          </button>
          </div>
        </div>
    </div>
    </>
  )
}
