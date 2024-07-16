import React from 'react'
export const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4 '>
        <p>It's time to get</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span>
        </h1>
      </div>
        <p className='text-sm md:text-base font-light'>I hereby acknowledgement that i may 
          <span className='text-blue-400 font-medium'> become unbelievably swolenormous 
          </span> and accept all risks of becoming the local mass monstrosity 
          <span> afflicted with severe body dismorphia,unable to fit through doors.</span>
          </p>
          <button className='px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid blueShadow blueShadow-duration-500'>
            <p>accept & begin</p>
          </button>
    </div>
  );
}
