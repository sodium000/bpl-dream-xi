import React from 'react'
import img from '../public/assets/logo.png'
import '../css/navbar.css'


export default function navbar() {
return (
    <div className='container mx-auto  h-[72px] mt-5 flex justify-between items-center px-3 '>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='flex gap-6 justify-between items-center NavName'>
            <div>Home</div>
            <div>Fixture</div>
            <div>Teams </div>
            <div>Schedules</div>
            <button className='border w-[125px] h-[48px] flex justify-center items-center gap-3 Navbutton rounded-xl border-gray-400'>0<span>Coin </span><img src="../public/assets/Currency.png" alt="" /></button>
        </div>
    </div>
)
}
