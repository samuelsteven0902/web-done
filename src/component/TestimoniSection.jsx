import React from 'react'
import imgSamantha from '../../public/assets/img/testi/samantha.png'
import imgsamuel from '../../public/assets/img/testi/samuel.png'
import imgagus from '../../public/assets/img/testi/agus.png'
import checkListImg from '../../public/assets/img/checklist.png'

function TestimoniSection() {
  return (
    <div className='h-full pb-12 md:pb-0 md:h-screen text-white w-full flex justify-center items-center m-auto'>
      <div className='block md:flex justify-evenly items-center w-full'>
        <div className='pl-4 md:pl-0 mb-12 md:mb-12'>
          <p className='text-[48px]'>Kenapa Webdone</p>
         <div className='space-y-2'>
         <div className='flex space-x-3'>
            <img src={checkListImg} />
            <p>Cepat</p>
          </div>
          <div className='flex space-x-3'>
            <img src={checkListImg} />
          <p>Terjangkau</p>
          </div>
          <div className='flex space-x-3'>
            <img src={checkListImg} />
          <p>100% data aman</p>
          </div>
          <div className='flex space-x-3'>
            <img src={checkListImg} />
          <p>Gratis Konsuktasi</p>
          </div>
         </div>
        </div>
        <div className='space-y-10 -mr-24'>

          <div className='from-[#00FFD5]/25 bg-gradient-to-r to-white/25 rounded-xl w-3/4 md:w-[493px] h-[156px] '>
            <div className='flex justify-evenly h-full'>
              <div className='w-1/4 b mx-auto  flex justify-center'>
                <img src={imgSamantha}  className='object-contain scale-75'/>
              </div>
              <div className='w-3/4 flex flex-col justify-center  '>
                <p className='font-bold px-3'>Samantha C</p>
                <p  className='px-3'>murah dan terjangkau, cocok untuk umkm yang masih ingin memulai bisnis barunya</p>
              </div>
            </div>
          </div>
          <div className='from-[#62BDFF]/25 bg-gradient-to-r to-white/25 rounded-xl w-2/3 md:w-[493px] h-[156px] ml-12 '>
            <div className='flex justify-evenly h-full'>
              <div className='w-1/4 b mx-auto  flex justify-center'>
                <img src={imgsamuel}  className='object-contain scale-75'/>
              </div>
              <div className='w-3/4 flex flex-col justify-center  '>
                <p className='font-bold px-3'>Agus Hasibuan</p>
                <p  className='px-3'>Gak perlu bingung dan takut, karena sudah ditangani semua sama webdone</p>
              </div>
            </div>
          </div>
          <div className='from-[#FF42BF]/25 bg-gradient-to-r to-white/25 rounded-xl w-3/4 md:w-[493px] h-[156px] '>
            <div className='flex justify-evenly h-full'>
              <div className='w-1/4 b mx-auto  flex justify-center'>
                <img src={imgagus}  className='object-contain scale-75'/>
              </div>
              <div className='w-3/4 flex flex-col justify-center  '>
                <p className='font-bold px-3'>Samuel Edi</p>
                <p className='px-3'>Pertamanya kurang yakin, tapi setelah berkonsultasi jadi yakin dan bikin untuk mulai bisnis dengan website </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TestimoniSection