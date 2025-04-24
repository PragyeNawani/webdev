import React from 'react'
import Link from 'next/link'
const Section1 = () => {
  return (
    <section className='2xl:min-h-[80vh] w-[100%] bg-gray-950 pt-[180px] pb-[100px]'>
        <div className="homecontainer mx-auto w-[90%] 2xl:w-[1500px] flex flex-col-reverse gap-[20px] 2xl:gap-0 xl:flex-row items-center justify-center">
            <div className="info xl:w-[40%] flex flex-col px-[5px] py-[5px] gap-[10px]">
                <div className="infohead flex gap-[5px] items-center">
                    <div><img src="./IMG_4910.jpeg" className='pfp h-[40px] w-[40px] rounded-xl object-cover' alt="" /></div>
                    <div><div className='h-[15px] w-[15px] bg-opacity-60 bg-[#2eb62e] rounded-full flex items-center pl-[2px]'><svg xmlns="http://www.w3.org/2000/svg" className='h-[10px] w-[10px]' fill='#32CD32' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></div></div>
                    <div className='text-gray-600'>Available For Work</div>
                </div>
                <div className='xl:text-6xl text-4xl text-white'>Build Scalable Modern Websites For Future</div>
                <div className='mt-[40px] flex w-fit gap-[10px]'>
                    <Link href={"Pragye%20Nawani%20CV.pdf"} target='_blank'>
                    <div className='bg-blue-400 w-fit px-[20px] flex gap-[10px] py-[10px] rounded-xl cursor-pointer'>Download CV <div className='h-[20px] w-[20px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg></div></div>
                    </Link>
                    <Link href={"#contactme"}>
                    <div className='bg-gray-500 text-white w-fit px-[20px] flex gap-[10px] py-[10px] rounded-xl cursor-pointer  '>Scroll Down<div className='h-[10px] w-[10px] mt-[5px] '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='white'><path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"/></svg></div></div>
                    </Link>
                </div>
            </div>
            <div className='xl:w-[40%] w-[300px] sm:w-[600px] h-[500px]'>
                <img src="./displaypic.jpg" className='w-[100%] h-[100%] object-cover rounded-xl' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section1
