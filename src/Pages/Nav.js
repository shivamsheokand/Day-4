import React from 'react'
import { FaSearch } from "react-icons/fa";
import Logo from '../assets/Logo.png'
import tiktok from '../assets/tiktok.png'
const Nav = () => {
    return (
        <div className='relative flex items-center justify-between'>
            <div className='p-5 mx-4'>
                <img className='h-10 resize ' src={Logo} alt="" />
            </div>
            <div className='bg-[#0d2e44] w-12 rounded-full h-12 absolute top-1 left-1/4 '>
            <img className='w-6 translate-x-3 translate-y-3 resize' src={tiktok} alt="" />
            </div>
            <div className='relative flex items-center gap-12 '>
            <div className='bg-[#fec25a] absolute h-16 w-16 translate-x -translate-y-2 rounded-bl-2xl'></div>
                <ul className='relative flex items-center gap-12 text-white uppercase'>
                    <li className='px-2 font-bold text-black '>Home</li>
                    <li>News</li>
                    <li>Support</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
                <div className='bg-[#fec25a] absolute right-0 h-12 w-14 translate-x -translate-y-1 rounded-bl-2xl'></div>
                <span className='relative mr-5 text-2xl'><FaSearch /></span>
            </div>
        </div>
    )
}

export default Nav