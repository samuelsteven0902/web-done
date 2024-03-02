import React,  { useRef, useState } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow,Navigation, Pagination,HashNavigation } from 'swiper/modules';


import checkListImg from '../../public/assets/img/checklistfooter.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import imgSamantha from '../../public/assets/img/testi/samantha.png'
import imgsamuel from '../../public/assets/img/testi/samuel.png'
import imgagus from '../../public/assets/img/testi/agus.png'




function PaketSection() {
  return (
    <div className='h-full text-white flex justify-center'>
      <div>
        <div className='pt-12 text-center'>
          <p className='text-[48px]'>Pilih Langkahmu Bersama Kami </p>
          <p className='text-[20px]'>Tentukan pilihanmu yang sesuai dengan kebutuhanmu, kami bisa bantul kasih solusi yang kamu perlu </p>
        </div>
        <div>
      
        <>
          <div className='flex justify-center py-12'>
            <div className='flex md:flex-row flex-col items-center md:space-x-12  w-full '>
              <div className='border-2 rounded-[20px] w-[90%] mb-12 md:w-[40%]  space-y-2 border-white bg-white bg-opacity-50 text-white p-10'>
                <p className='text-[32px] font-inter-bold'>Basic</p>
                <p className='text-[16px] font-inter-light'>Langkah awal buat bisnis barumu!</p>
                <hr/>
                <p className='font-inter-light'>Start from</p>
                <p className='text-[32px] font-inter-bold' >Rp. 649.999</p>
                <div className='pt-7'>
                <div className='flex'>
                    <img src={checkListImg} />
                    <p>Landing Page</p>
                  </div>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Free Domain & Hosting</p>
                  </div>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Free 2x Revision</p>
                  </div>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Include SEO</p>
                  </div>
                </div>
                <div className='pt-[90px] flex justify-center font-inter-bold'>
                  <button className='px-5 py-2 rounded-full text-[20px] text-black border-2 border-white  bg-[#00FFD5]'>
                    Buat Sekarang
                  </button>
                </div>
              </div>

              <div className='border-2 w-[90%] md:w-[60%] rounded-[20px] space-y-2 border-white bg-black bg-opacity-50 text-white p-10 relative'>
                <div className='absolute top-0 p-1 rounded-b-lg right-12 bg-gradient-to-r from-white to-[#00FFD5]'>
                  <p className='text-black font-inter-bold'>Best Deal</p>
                </div>
                <p className='text-[32px] bg-gradient-to-r font-inter-bold italic uppercase from-white to-[#00FFD5] inline-block text-transparent bg-clip-text  '>Professional</p>
                <p className='text-[14px] font-inter-light'>Bikin bisnismu jadi lebih profesional dan beda dari yang lain !</p>
                <hr/>
                <p className='font-inter-light'>Start from</p>
                <p className='text-[32px] font-inter-bold text-[#00FFD5] ' >Rp. 1.999.999</p>
                <div className='pt-7'>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Landing Page</p>
                  </div>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Free Domain & Hosting</p>
                  </div>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Free 2x Revision</p>
                  </div>
                  <div className='flex'>
                    <img src={checkListImg} />
                    <p>Include SEO</p>
                  </div>
                </div>
                <div className='pt-[90px] flex justify-center font-inter-bold'>
                  <button className='px-5 py-2 rounded-full text-[20px] text-black border-2 border-white  bg-[#00FFD5]'>
                    Buat Sekarang
                  </button>
                </div>
              </div>
           
            </div>
          </div>
       </>
        </div>
      </div>
    </div>
  )
}

export default PaketSection