import React from 'react';
import '../css/footer.css'

const submitEmail = () => {
    return (
     <>
        <div className='bg-[#06091a] w-full '>
            <div className='border-3 border-white container mx-auto p-7 rounded-2xl relative -top-[185px]'>
                <div className=' container mx-auto h-[336px] flex justify-center items-center rounded-2xl mainBg'>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <div className='footer'>Subscribe to our Newsletter</div>
                        <div className='footerT'>Get the latest updates and news right in your inbox!</div>
                        <div className='flex gap-5 '>
                            <input type="text"  className='footerI'/>
                            <button className='footerB'>Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-20 justify-between items-center relative -top-[120px]'>
                <div>
                    <img src="logo-footer.png" alt="" />
                </div>
                <div className=' container mx-auto grid grid-cols-3 text-white text-start  gap-50'>
                    <div >
                        <h1 className='mb-5 footerHead'>About Us</h1>
                        <p className='footerText'>We are a passionate team <br /> dedicated to providing the best services <br /> to our customers.</p>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <h1 className='footerHead'>Quick Links</h1>
                        <ul className=' flex flex-col gap-3 list-[square] footerText pl-3'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='footerHead'>Subscribe</div>
                        <div className='footerText'>Subscribe to our newsletter for the latest updates.</div>
                        <div className='flex'>
                            <input type="text"  className='footerInput'/>
                            <button className='footerButton'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[90px]  Text flex items-center justify-center border-t-1 border-t-gray-500'>
            @2024 Your Company All Rights Reserved.
        </div>
        </div>
        
     </>
    );
};

export default submitEmail;