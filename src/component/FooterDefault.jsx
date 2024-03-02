import React from 'react'
import checkListImg from '../../public/assets/img/checklistfooter.png'

function FooterDefault() {
    const bidangBidang = ['Company Profile','Toko Online','Undangan Digital','ERP','Inventory','Reservasi','Custom Sepatu','Inventory','Bengkel','Catering','Travel','Portal Berita','Management Sekolah']

  return (
    <div className='bg-black'>
        <div className='text-white w-5/6 mx-auto'>
            <div className='flex flex-col items-center py-12 md:py-24'>
                <p className='text-4xl  '>Mau bidang apapun kami bisa bantu</p>
                <p className=''>Berikut merupakan bidang- bidang yang sekiranya bisa kami kerjakan </p>
            </div>
            <div className='flex flex-wrap justify-center transition ease-out duration-700 '>
                {bidangBidang.map((item,index)=>{
                    return(
                        <div key={index} className='flex md:w-1/6 m-4 justify-center'>
                            <div className=''>
                                <img src={checkListImg} className='w-7 h-7'  />
                            </div>
                            <p>{item}</p> 
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-center pt-12 pb-24'>
                <button className='bg-[#00FFD5] text-black px-[60px] py-[15px]  '>
                    <p className=''>Konsul Sekarang</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default FooterDefault