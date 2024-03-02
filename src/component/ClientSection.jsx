import React from 'react'
import { instansi } from './constant'

function ClientSection() {
    console.log(instansi.map(item=>item.name));
  return (
    <div className='flex justify-center text-white'>
        <div className='bg-black bg-opacity-50 w-[90%] md:w-[75%] rounded-lg md:rounded-full border-2 border-white' >   
           <div className='flex flex-wrap justify-evenly items-center py-6 md:py-1 '>
           {instansi.map((item,index)=>{
                return (
                    <img key={index} src={`/assets/img/instansi/${item.icon}.png`} className='  scale-75' alt={item.name} />
                
                )})}
                <p className='text-xl flex justify-center'>+ 10 Lainnya</p>
           </div>
            
        </div>
    </div>
  )
}

export default ClientSection