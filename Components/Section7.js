import React from 'react'

const Section7 = () => {
  return (
    <section className='min-h-[50vh] w-[100%] bg-gray-950 text-white'>
    <div className="w-[90%] xl:w-[1200px] mx-auto flex flex-col xl:flex-row p-[20px]">
        <div className='leftside flex flex-col w-[50%]'>
            <div className='text-4xl md:text-6xl w-[300px] md:w-[500px]'>
                Let's work together today!
            </div>
            <div className='mt-[30px] md:mt-[80px] text-xl text-gray-400 w-[300px] md:w-[400px]'>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Project &gt;</button>
            </div>
        </div>
        <div className="mt-[30px] md:mt-0 rightside md:w-[50%]">
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] md:gap-0'>
                <div className='md:w-[50%]'>
                  <div className='text-lg text-white text-center md:text-left'>SiteMap</div>
                  <ul className='text-gray-400 mt-[15px]'>
                    <li className='mt-[5px] text-center md:text-left'>Home</li>
                    <li className='mt-[5px] text-center md:text-left'>About</li>
                    <li className='mt-[5px] text-center md:text-left'>Work</li>
                    <li className='mt-[5px] text-center md:text-left'>Reviews</li>
                    <li className='mt-[5px] text-center md:text-left'>Contact</li>
                  </ul>
                </div>
                <div className='md:w-[50%]'>
                  <div className='text-lg text-white text-center md:text-left'>Socials</div>
                  <ul className='text-gray-400 mt-[15px]'>
                    <li className='mt-[5px] text-center md:text-left'>LinkedIn</li>
                    <li className='mt-[5px] text-center md:text-left'>Github</li>
                    <li className='mt-[5px] text-center md:text-left'>Instagram</li>
                    <li className='mt-[5px] text-center md:text-left'>Twitter</li>
                    <li className='mt-[5px] text-center md:text-left'>Fiverr</li>
                    <li className='mt-[5px] text-center md:text-left'>Upwork</li>
                    <li className='mt-[5px] text-center md:text-left'>Freelance</li>
                  </ul>
                </div>
            </div>
        </div>

    </div>
</section>
  )
}

export default Section7
