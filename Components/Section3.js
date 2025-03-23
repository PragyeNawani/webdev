import React from 'react'

const Section3 = () => {
    return (
        <section className='min-h-[50vh] w-[100%] bg-gray-950 text-white py-[100px]'>
            <div className='w-[80%] md:w-[800px] 2xl:w-[1200px] mx-auto p-[20px]'>
                <div className='w-[300px] md:w-[600px] text-5xl mb-[20px] mx-auto md:mx-0 text-center md:text-left'>
                    Essential Tools I Use
                </div>
                <div className='w-[300px] md:w-[600px] mx-auto text-center md:mx-0 md:text-left  text-lg text-gray-300 mb-[30px]'>
                    Discover the powerfull tools and technologies I use to create exceptional, high-performing websites & applications
                </div>
                <div className='grid justify-center sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-[10px]'>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./figma.png" className='w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>Figma</span>
                            <span className='text-sm text-gray-400'>Design Tool</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./css.png" className='w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>CSS</span>
                            <span className='text-sm text-gray-400'>User Interface</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./javascript.png" className='w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>JavaScript</span>
                            <span className='text-sm text-gray-400'>Interaction</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./nodejs.png" className='w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>NodeJS</span>
                            <span className='text-sm text-gray-400'>Web Server</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./expressjs.png" className='invert-[1] w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>ExpressJS</span>
                            <span className='text-sm text-gray-400'>Node Framework</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./mongodb.png" className='w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>MongoDB</span>
                            <span className='text-sm text-gray-400'>Database</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./react.png" className='w-[35px] h-[35px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>React</span>
                            <span className='text-sm text-gray-400'>Framework</span>
                        </div>
                    </div>
                    <div className='flex border-[1px] w-[200px] lg:w-[250px] border-gray-600 p-[10px] rounded-xl gap-[10px]'>
                        <div className='bg-gray-800 w-[50px] h-[50px] rounded-xl flex items-center justify-center'>
                            <img src="./tailwindcss.png" className='w-[40px] h-[40px] rounded-xl object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <span className='text-xl'>TailwindCSS</span>
                            <span className='text-sm text-gray-400'>User Interface</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3
