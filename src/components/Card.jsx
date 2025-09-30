import React from 'react'


function Card({ title, description }) {
  return (
    <div className='w-80 h-48 border-2 border-gray-300 rounded-lg p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300  '>
        <h1 className='text-2xl font-bold text-start'>{title}Home Automation</h1>
        <h2 className='text-xl m-3 text-start'>{description} Control lighting, appliances, and security with a single touch or voice command</h2>  
    </div>
  )
}

export default Card
