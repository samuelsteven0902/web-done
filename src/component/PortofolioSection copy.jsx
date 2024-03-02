import React, { useEffect, useState } from 'react'
import { instansi, portofolio } from './constant';

function PortofolioSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isComponentsAvailable, setIsComponentsAvailable] = useState(true);

  const goNext = () => {
    const slider = document.getElementById('slider');
    const maxTransform = -slider.scrollWidth + slider.clientWidth;
    const newTransform = translateX - 340;
    const nextTransform = newTransform < maxTransform ? maxTransform : newTransform;
    setTranslateX(nextTransform);
  };

  const goPrev = () => {
    const newTransform = translateX + 340;
    const prevTransform = newTransform > 0 ? 0 : newTransform;
    setTranslateX(prevTransform);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3000); // Mentrigger goNext setiap 3 detik
    return () => clearInterval(interval); // Membersihkan interval saat komponen dibongkar
  }, []); // Mentrigger hanya sekali saat komponen dimount


  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(${translateX}px)`;
  }, [translateX]);

  const handleMouseDown = (e) => {
    const slider = document.getElementById('slider');
    if (slider.scrollWidth <= slider.clientWidth) {
      // No components available to drag
      setIsComponentsAvailable(false);
      return;
    }

    setIsDragging(true);
    setStartX(e.pageX - translateX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newTranslateX = e.pageX - startX;
    setTranslateX(newTranslateX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsComponentsAvailable(true);
  };


  return (
    <div className='h-full m-auto text-white'>
      
      <div className='w-full mx-auto text-center '>
      

      <div
        className="flex items-center justify-center w-full h-full pt-24 pb-24 px-10"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="w-full relative flex items-center justify-center">
          <button aria-label="slide backward" className="absolute z-30 left-0 md:ml-10 hover:bg-gray-500 bg-gray-600 cursor-pointer opacity-70 p-2 rounded" id="prev" onClick={goPrev}>
            <svg className="text-gray-400" width="18" height="32" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden animate-marquee">
            <div id="slider" className="h-full  flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
              


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
          <button aria-label="slide forward" className="absolute z-30 right-0 md:mr-10 hover:bg-gray-500 bg-gray-600 cursor-pointer opacity-70 p-2 rounded" id="next" onClick={goNext}>
            <svg className="text-gray-400" width="18" height="32" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default PortofolioSection