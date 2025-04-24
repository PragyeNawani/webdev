"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
    const [navshow, setNavshow] = useState(false)
    return (
        <nav className="sticky bg-white w-full z-20 top-0 start-0 h-0">
            <div className='backdrop-blur-[10px]'>

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./IMG_4910.jpeg" className="h-[50px] w-[50px] pfp  object-cover rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-sm sm:text-2xl font-semibold whitespace-nowrap text-white">Pragye Nawani</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                        <Link href={"#contactme"}>
                            <button type="button" className="text-gray-900 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Contact Me</button>
                        </Link>
                        <button onClick={() => { setNavshow(!navshow) }} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${navshow ? "" : "hidden"} w-full md:flex md:w-auto md:order-1 bg-gray-700 px-[15px] py-[10px] rounded-2xl" id="navbar-sticky naventry`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-[2px] border-white md:border md:border-gray-100 rounded-xl md:rounded-l gap-[5px] lg:gap-[10px] md:flex-row md:mt-0 md:border-0 relative">
                            <div className='h-[50px] w-[80px] md:bg-white absolute top-[3px] left-[12px] rounded-lg'></div>
                            <li onClick={() => {
                                setTimeout(() => {
                                    setNavshow(false)
                                }, 200);
                            }} className='px-[20px] w-full mx-auto md:mx-0 md:py-[8px] rounded-lg text-center md:w-[100px]'>
                                <Link href={""} className="block hover:bg-white md:hover:bg-0 hover:text-black py-[10px] md:py-2 md:px-3 text-center  text-gray-400 md:text-gray-900  z-[1] relative rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li onClick={() => {
                                setTimeout(() => {
                                    setNavshow(false)
                                }, 200);
                            }} className='px-[20px] w-full mx-auto md:mx-0 md:py-[8px] rounded-lg text-center md:w-[100px]'>
                                <Link href={"#about"} className="block hover:bg-white md:hover:bg-0 hover:text-black py-[10px] md:py-2 md:px-3 text-center text-gray-400 rounded md:hover:bg-transparent md:p-0 md:hover:text-white z-[1] relative">About</Link>
                            </li>
                            <li onClick={() => {
                                setTimeout(() => {
                                    setNavshow(false)
                                }, 200);
                            }} className='px-[20px] w-full mx-auto md:mx-0 md:py-[8px] rounded-lg text-center md:w-[100px]'>
                                <Link href={"#work"} className="block hover:bg-white md:hover:bg-0 hover:text-black py-[10px] md:py-2 md:px-3 text-center text-gray-400 rounded md:hover:bg-transparent md:p-0 md:hover:text-white z-[1] relative">Work</Link>
                            </li>
                            <li onClick={() => {
                                setTimeout(() => {
                                    setNavshow(false)
                                }, 200);
                            }} className='px-[20px] w-full mx-auto md:mx-0 md:py-[8px] rounded-lg text-center md:w-[100px]'>
                                <a href="#" className="block hover:bg-white md:hover:bg-0 hover:text-black py-[10px] md:py-2 md:px-3 text-center text-gray-400 rounded md:hover:bg-transparent md:p-0 md:hover:text-white z-[1] relative">Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
