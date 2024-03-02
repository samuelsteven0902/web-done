import React, { useEffect, useState } from 'react'
import { instansi, portofolio } from './constant';

function PortofolioSection() {
  

  return (
    <div className='h-full w-full m-auto text-white'>
      
      <div className='w-full mx-auto text-center '>
      

      <div
        className="flex items-center justify-center w-full h-full pt-24 pb-24"
      >
        <div className="w-full relative flex items-center justify-center">
       

          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div id="slider" className="h-full  flex lg:gap-8 md:gap-6 gap-14 w-full items-center justify-start transition ease-out duration-700 animate-marquee">
              
              {portofolio.map((item,index)=>{
                return(
                  <>
                    <div className="flex  flex-shrink-0 relative w-full sm:w-auto">
                      <img src={`/assets/img/portofolio/${item.gambar}.${item.ekstensi}`} alt="pemuda" className=" object-center object-contain w-[400px]  h-[200px]  " />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">{item.nama}</h2> */}
                        <div className="flex h-full items-end pb-6">
                          {/* <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Ibadah pukul 17.30, Sabtu</h3> */}
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            
            </div>
          </div>
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default PortofolioSection