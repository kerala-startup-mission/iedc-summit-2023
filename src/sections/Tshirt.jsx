import React from 'react'
import BottomVector from '../assets/img/Group 74.png'
import TopVector from '../assets/img/Group 75.png'
import TshirtImg from '../assets/img/tshirt.png'

function Tshirt() {
  return (
    <div className=''>
        <img src={TopVector} alt='top' className='pb-4 hidden md:block'/>
        <hr className='w-4/5 md:w-3/5 border-solid border-2 border-[#0597F2] float-right mt-4'/>
        <div className='md:w-11/12 bg-gradient-to-br from-[#0597F2]  to-[#6F04D9] flex flex-col gap-8 justify-center items-center md:items-end md:rounded-r-[40px] overflow-visible relative py-8 my-8'>
            <img src={TshirtImg} alt='tshirt' className='md:absolute md:-left-[28px] -my-36 md:my-0 md:w-2/5 z-10'/>
            <h2 className='text-white  font-bold text-6xl text-center md:text-start md:text-8xl md:leading-none md:w-3/5'>Grab your Tees Now</h2>
            <div className=' flex justify-center md:justify-start w-3/5'>
                <a className='bg-[#FBFCFF] text-3xl md:text-4xl font-bold px-2 py-2 md:py-4 rounded-xl' href=''>
                    <h2 className='bg-gradient-to-br from-[#0597F2]  to-[#6F04D9] bg-clip-text text-transparent'>
                        Buy Now
                    </h2>
                </a>
            </div>
        </div>
        <hr className='w-4/5 md:w-3/5 border-solid border-2 border-[#0597F2] float-left -mt-4'/>
        <img src={BottomVector} alt='bottom' className='pt-4 hidden md:block'/>
    </div>
  )
}

export default Tshirt