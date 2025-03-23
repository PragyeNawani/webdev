import React from 'react'

const Section2 = () => {
  return (
    <section id="about" className='min-h-[50vh] w-[100%] bg-gray-950 text-white py-[10px]'>
      <div className="holder p-[30px] w-[90%] 2xl:w-[1200px] bg-gray-800 rounded-lg mx-auto">
        <div className="desc text-lg">
          <div className='mb-[20px]'>
          As a passionate web developer and designer, I specialize in creating engaging and user-centric digital experiences that drive results. With a strong foundation in both front-end and back-end development, I leverage the latest technologies and design principles to build responsive, visually stunning websites and applications.
          </div>
          <div className='mb-[20px]'>
          My expertise divs HTML, CSS, JavaScript, and various frameworks. I thrive on solving complex problems and turning creative concepts into functional, high-performance solutions. My approach blends technical proficiency with a keen eye for design, ensuring that every project not only looks great but performs seamlessly.
          </div>
          <div className='mb-[20px]'>
          I'm committed to continuous learning and staying ahead of industry trends to deliver innovative solutions that meet the evolving needs of clients and users. Whether you're looking to launch a new website, revamp an existing one, or enhance user experience, I'm here to help bring your vision to life.
          </div>
          <div className='mb-[20px]'>
          Let's connect and explore how we can collaborate to create something amazing!
          </div>
        </div>
        <div className="rating flex">
          <div className='w-[150px]'>
            <div className='text-5xl'>
              10
              <span className='text-blue-300'>+</span>
            </div>
            <div className='text-gray-400'>Projects Done</div>
          </div>
          <div className='w-[150px]'>
            <div className='text-5xl'>
              1
              <span className='text-blue-300'>+</span>
            </div>
            <div className='text-gray-400'>Year of Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
