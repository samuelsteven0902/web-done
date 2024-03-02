import React from 'react'
import laptob from '../assets/img/landing_laptob.png'

function HeroSection() {
  return (
    <div className='max-w-screen-lg mx-auto  h-[100vh] relative '>
        <div className='text-white '>
            <div className='group transition-all ease-in-out duration-300    bg-green-200 '>
            <p className='absolute top-[60px] md:left-[70px] left-[10px] text-sm md:w-full w-1/2'>Mau naikin omset dan bikin brandmu makin profesional ?</p>
                <p className='absolute text-[50px] md:text-[110px] leading-[150px] top-[160px] md:top-[110px] left-[25px]  md:left-[170px] group-hover:top-[100px] group-hover:left-[50px]  transition-all ease-in-out duration-300 '>Kami</p>
                <p className='absolute text-[40px] md:text-[70px]  leading-[100px] top-[240px] md:top-[230px] left-[30px] md:left-[225px] group-hover:top-[270px] group-hover:left-[115px]  transition-all ease-in-out duration-300 delay-100'>Solusi</p>
                <p className='absolute text-[50px] md:text-[98px] leading-[128px] top-[150px] right-[105px] group-hover:top-[180px] group-hover:right-[0px]  transition-all ease-in-out duration-300 delay-100'>Bisnis</p>
                <p className='uppercase absolute text-[34px] leading-[64px] top-[270px] right-[210px] group-hover:top-[320px] group-hover:right-[50px]  transition-all ease-in-out duration-300'>Barumu</p>
                <img src={laptob} alt='laptob bos' className=' w-[250px] md:w-[450px] absolute top-[200px] md:top-[110px] left-[50px] md:left-[250px] ' />
              
                <div className='absolute bottom-[100px] md:top-[450px]  md:left-[70px] bg-red-200 '>
                    <div className='flex flex-col md:flex-row items-center space-y-12 md:space-x-12'> 
                        <button className='bg-[#00FFD5] py-[15px] px-[50px] rounded  text-black ' >
                        Mulai Sekarang
                        </button>
                        <div className='bg-green-200'>
                            <p>
                             kami beresin website kalian sampai 100%
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSection