import React from 'react'
import img from '../assets/img.png'
import bluecircle from '../assets/circal2blue.png'
import redcircle from '../assets/circal3red.png'
import yellowcircle from '../assets/circaliyellow.png'
import youtube from '../assets/youtube.png'
import snap from '../assets/snapchat.png'
import pre from '../assets/prentrist.png'
import whatsapp from '../assets/whatsapp.png'
const Home = () => {
    return (
        <div className='relative flex items-center justify-center h-screen gap-4 overflow-hidden'>
            <div className='flex flex-col w-[50%]'>
                <h1 className='text-6xl font-bold text-white'>
                NewsLatter</h1>
                <h1 className='flex gap-2 font-mono text-5xl text-white '>Updates <h1   className=' font-serif text-5xl text-[#fec25a]'>!</h1></h1>
                <p className='text-white w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea maxime vel voluptates placeat repellat laudantium.</p>
                <input className='bg-[#fac25a] w-[40%] px-2 py-1 placeholder:text-white placeholder:font-serif rounded-tr-2xl mt-8' type="text" placeholder='Name' />
                <input className='w-[40%] px-2 py-1 placeholder:font-serif rounded-br-2xl placeholder:text-black mt-6' type="text" placeholder='Email' />
                <button className='mt-6 bg-[#fac25a] rounded-tr-xl rounded-bl-xl w-[20%] font-mono'>Sand Details</button>
            </div>
                <div className='relative'>
                <img className=' w-[200px] translate-x-36 absolute top-4   translate-y-8' src={redcircle} alt="" />
                <img className='w-[200px] -translate-x-12  translate-y-20 ' src={yellowcircle} alt="" />
                <img className=' w-[330px] h-[250px] translate-y-12' src={bluecircle} alt="" />
            <div className=''>
                <img className='h-[450px] resize absolute top-0 ' src={img} alt="" />
                </div>
            </div>
                <div>
                    {/* <div className='bg-[#0d2e44] w-16 rounded-full h-16 absolute top-0 -translate-y-14 left-1/4'>
                    <img className='absolute w-10 top-2 left-3' src={tiktok} alt="" />
                    </div> */}
                    <div className='bg-[#0d2e44] w-14 rounded-full h-14 absolute top-2/4 -translate-x-28 -translate-y-20  right-1/4'>
                    <img className='w-8 translate-x-3 translate-y-3' src={snap} alt="" />
                    </div>
                    <div className='bg-[#0d2e44] w-12 rounded-full h-12 absolute top-1/4  right-1/4 translate-x-32'>
                    <img className='w-8 translate-x-2 translate-y-2' src={youtube} alt="" />
                    </div>
                    <div className='bg-[#0d2e44] w-16 rounded-full h-16 absolute top-2/4  right-2/4 -translate-x-4'>
                    <img className='w-10 translate-x-3 translate-y-3' src={whatsapp} alt="" />
                    </div>
                    <div className='bg-[#0d2e44] w-16 rounded-full h-16 absolute -bottom-1  left-1/4 -translate-x-4'>
                    <img className='w-10 translate-x-3 translate-y-3' src={pre} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Home