import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center px-3'>
      <div className='fixed border-b top-0 w-full p-3 flex justify-between items-center'>
        <NavLink to='/profile' className='flex items-center'>
          <div className='w-8 h-8 rounded-full bg-gray-100 mr-1'></div>
          <span className='font-semibold text-sm'> Mary </span>
        </NavLink>
        <span className='text-sm'> Logo </span>
      </div>
      <div className='mt-16 mx-3 w-full'>
        <h2 className='text-gray-500 font-semibold w-full text-left'> Streaming Attendances </h2>
      </div>
    </div>
  )
}

export default Home