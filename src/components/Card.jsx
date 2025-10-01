'use client'
    import React from 'react'
function Card({ title, description, icon }) {
  return (
    <div className='w-85 h-50 border-2 border-gray-300 rounded-lg p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300  '>
        <span>{icon}</span>
        <h1 className='text-2xl font-bold text-start'>{title}</h1>
        <h2 className='text-xl ml-3 text-start'>{description}</h2>  
    </div>
  )
}

export default Card
