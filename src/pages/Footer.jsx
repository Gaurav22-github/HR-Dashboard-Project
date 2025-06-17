import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div className='flex p-2 bg-white z-10 justify-between sm:p-6 md:p-8 w-full  mt-4 h-16 sm:h-20 md:h-24 cursor-pointer'>
            <div className='text-sm sm:text-base md:text-lg'>2014 - 2025 © SmartHR.</div>
            <div className='text-sm sm:text-base md:text-lg'>Designed & Developed By <span className='text-[#F5E7C6] rounded p-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44] bg-[#0a1f44] duration-500 font-bold'><Link to={"https://www.techbro24.com/"}>Gaurav</Link></span></div>
        </div>
    )
}