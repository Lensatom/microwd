import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {

  const [darkMode, setDarkMode] = useState()

  const changeMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='flex flex-col items-center px-3'>
      <div className='w-full fixed py-2 flex justify-between px-3'>
        <NavLink to='/'> Back </NavLink>
        <p> Edit </p>
      </div>
      <div className='flex w-full items-center justify-between h-auto mt-16 pb-2 border-b-1 border-gray-600'>
        <div className='flex w-3/4 items-center overflow-hidden'>
          <div className='w-16 h-16 rounded-full bg-gray-300'></div>
          <div className='flex flex-col justify-between h-24 ml-2 py-5 overflow-hidden'>
            <p className='text-xl font-semibold'> Mary Adebowale </p>
            <p className='text-sm'> mail@maryadebowale.com </p>
          </div>
        </div>
        <div className={`h-16 w-8 rounded-full ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black' } flex flex-col justify-between items-center py-1`} onClick={() => changeMode()}>
          <p className={`text-sm h-5 w-5 ${darkMode ? '' : 'bg-white text-balck' } flex items-center justify-center rounded-full`}> o </p>
          <p className={`text-sm h-5 w-5 ${darkMode ? 'bg-white text-black' : '' } flex items-center justify-center rounded-full`}> o </p>
        </div>
      </div>
      <h2 className='text-lg text-gray-500 font-semibold mt-5 w-full text-left'> Personal Information </h2>
      <div></div>
      <div className='w-full mt-10'>
        <div className='w-full flex justify-between items-center'>
          <p className='py-2'> Logout </p>
          <p> L </p>
        </div>
        <hr />
        <div className='w-full flex justify-between items-center'>
          <p className='py-2'> De-authenticate Device </p>
          <p> D </p>
        </div>
      </div>
    </div>
  )
}

export default Profile