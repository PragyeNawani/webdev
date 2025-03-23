import React from 'react'
import Link from 'next/link'

const Section4 = () => {
  return (
    <section id="work" className='min-h-[100vh] w-[100%] text-white py-[100px] bg-gray-950'>
        <div className='w-[90%] md:w-[700px] xl:w-[1200px] mx-auto p-[20px]'>
            <div className='text-5xl text-center xl:text-left'>My Portfolio Highlights</div>
            <div className='grid justify-center xl:grid-cols-2 2xl:grid-cols-3 mt-[50px] gap-y-[20px]'>
                <div className='bg-gray-800 w-[300px] sm:w-[380px] p-[10px] h-[310px] rounded-2xl flex flex-col relative'>
                    <div className='w-[280px] sm:w-[350px] mx-auto'>
                        <img src="./fitlife.png" className='object-cover rounded-lg' alt="" />
                    </div>
                    <div className='w-[280px] sm:w-[350px] mx-auto text-2xl'>
                        Frontend Fitness Website
                    </div>
                    <div className='mt-[15px] flex gap-[5px]'>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>API</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>MVC</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Development</div>
                    </div>
                    <div className='bg-blue-400 h-[50px] w-[50px] rounded-xl absolute right-[15px] bottom-[30px] flex justify-center items-center'>
                        <div className='h-[30px] opacity-70 w-[30px]'>
                        <Link href={"https://pragyenawani.github.io/Fitlife/"} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 w-[300px] sm:w-[380px] p-[10px] h-[310px] rounded-2xl flex flex-col relative'>
                    <div className='w-[280px] sm:w-[350px] mx-auto'>
                        <img src="./ecommerce.png" className='object-cover rounded-lg' alt="" />
                    </div>
                    <div className='w-[280px] sm:w-[350px] mx-auto text-2xl'>
                        eCommerce website
                    </div>
                    <div className='mt-[15px] flex gap-[5px]'>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>eCommerce</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Development</div>
                    </div>
                    <div className='bg-blue-400 h-[50px] w-[50px] rounded-xl absolute right-[15px] bottom-[30px] flex justify-center items-center'>
                        <div className='h-[30px] opacity-70 w-[30px]'>
                        <Link href={""} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 w-[300px] sm:w-[380px] p-[10px] h-[310px] rounded-2xl flex flex-col relative'>
                    <div className='w-[280px] sm:w-[350px] mx-auto'>
                        <img src="./portfolio.png" className='object-cover rounded-lg' alt="" />
                    </div>
                    <div className='w-[280px] sm:w-[350px] mx-auto text-2xl'>
                        Portfolio
                    </div>
                    <div className='mt-[15px] flex gap-[5px]'>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Web-design</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Development</div>
                    </div>
                    <div className='bg-blue-400 h-[50px] w-[50px] rounded-xl absolute right-[15px] bottom-[30px] flex justify-center items-center'>
                        <div className='h-[30px] opacity-70 w-[30px]'>
                        <Link href={""} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 w-[300px] sm:w-[380px] p-[10px] h-[310px] rounded-2xl flex flex-col relative'>
                    <div className='w-[280px] sm:w-[350px] mx-auto'>
                        <img src="./landing.png" className='object-cover rounded-lg' alt="" />
                    </div>
                    <div className='w-[280px] sm:w-[350px] mx-auto text-2xl'>
                        Landing Page
                    </div>
                    <div className='mt-[15px] flex gap-[5px]'>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>UX/UI Design</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Development</div>
                    </div>
                    <div className='bg-blue-400 h-[50px] w-[50px] rounded-xl absolute right-[15px] bottom-[30px] flex justify-center items-center'>
                        <div className='h-[30px] opacity-70 w-[30px]'>
                        <Link href={""} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 w-[300px] sm:w-[380px] p-[10px] h-[310px] rounded-2xl flex flex-col relative'>
                    <div className='w-[280px] sm:w-[350px] mx-auto'>
                        <img src="./twitter.png" className='object-cover rounded-lg' alt="" />
                    </div>
                    <div className='w-[280px] sm:w-[350px] mx-auto text-2xl'>
                        Twitter/Xcom Clone
                    </div>
                    <div className='mt-[15px] flex flex-wrap sm:flex-nowrap w-[200px] sm:w-full gap-[5px]'>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Design</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Clone</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Development</div>
                    </div>
                    <div className='bg-blue-400 h-[50px] w-[50px] rounded-xl absolute right-[15px] bottom-[30px] flex justify-center items-center'>
                        <div className='h-[30px] opacity-70 w-[30px]'>
                        <Link href={""} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 w-[300px] sm:w-[380px] p-[10px] h-[310px] rounded-2xl flex flex-col relative'>
                    <div className='w-[280px] sm:w-[350px] mx-auto'>
                        <img src="./agency.png" className='object-cover rounded-lg' alt="" />
                    </div>
                    <div className='w-[280px] sm:w-[350px] mx-auto text-2xl'>
                        Modelling Agency
                    </div>
                    <div className='mt-[15px] flex gap-[5px]'>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Agency</div>
                        <div className='p-[10px] bg-gray-700 bg-opacity-80 rounded-lg w-fit text-sm'>Development</div>
                    </div>
                    <div className='bg-blue-400 h-[50px] w-[50px] rounded-xl absolute right-[15px] bottom-[30px] flex justify-center items-center'>
                        <div className='h-[30px] opacity-70 w-[30px]'>
                        <Link href={""} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4
