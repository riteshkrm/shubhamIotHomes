import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* navbar divided into two part  first logo section and second button section */}
      <nav className='w-full h-12 bg-amber-200 shadow-md color-white flex  items-center justify-evenly'>
        {/* Left side navbar / Logo Section */}
        <div className='fixed left-0 ml-10'>
          <h1 className='text-2xl font-bold'>Shubham IoT</h1>
        </div>

        {/* Right Side navbar / Button section */}
        <div className='fixed right-0 mr-10'>
          <ul className='flex items-center gap-10 text-3 font-bold'>
            <li>Home</li>
            <li>Work</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
