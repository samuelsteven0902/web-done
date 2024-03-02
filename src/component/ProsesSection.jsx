import React from 'react'
import { useEffect } from 'react'
import {
    Stepper,
    initTE,
  } from "tw-elements";

function ProsesSection() {
    useEffect(() => {
        initTE({ Stepper });
    }, [])
    
  return (
    <div className='bg-black md:h-screen text-white'>
        <div className='text-white flex flex-col items-center py-24 text-4xl'>
            <p>Gak Usah Pusing Buat </p>
            <p>Bisnis Kamu Menajdi Online </p>
        </div>
        
       <div className=' flex flex-col md:flex-row justify-center   space-y-12 md:space-x-24 z-10 relative'>
            <div className='hidden md:block absolute bg-gradient-to-r from-black -z-10 to-white w-3/4 px-12 h-5 translate-y-3 -translate-x-1  '></div>
            <div className='md:hidden absolute bg-gradient-to-b from-black -z-10 to-white h-3/4  w-5 right-1/2 translate-x-1/2  '></div>

            <div className=' flex flex-col items-center'>
                <div className='bg-[#00FFD5]  inline-block rounded-full w-10 h-10 border-white border-2'></div>
                <p>Konsultasi</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className='bg-[#255EB5]  inline-block rounded-full w-10 h-10 border-white border-2'></div>
                <p>Desain</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className='bg-[#7B6EBF]  inline-block rounded-full w-10 h-10 border-white border-2'></div>
                <p>Pengembangan</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className='bg-[#62BDFF]  inline-block rounded-full w-10 h-10 border-white border-2'></div>
                <p>Testing</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className='bg-[#FF42BF]  inline-block rounded-full w-10 h-10 border-white border-2'></div>
                <p>Revisi</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className='bg-[#F6A2DA]  inline-block rounded-full w-10 h-10 border-white border-2'></div>
                <p>Hosting</p>
            </div>
           

       </div>

        <div className='flex justify-center pb-12 mt-24'>
            <button className='bg-emerald-400 rounded-full py-3 px-10 text-black'>
                Buat Sekarang 
            </button>
        </div>

    </div>
  )
}

export default ProsesSection