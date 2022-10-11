import React from 'react'

const Authenticate = () => {
  return (
    <div className='px-3 flex flex-col justify-between items-center py-5 h-screen w-full'>
      <h2 className='font-semibold text-2xl'> Authenticate </h2>
      <div className='h-1/4'></div>
      <p className='text-center'> Found an authentication to allow you login. This login process with register your account on this device and
        will disallow any other login on other devices. Therefore, make sure this device is your personal device.
        However, this device can be de-authenticated at your will. This is a measure to ensure account security and prevent false presence.
      </p>
      <button className='bg-green-200 w-1/2 py-2 rounded-md'> Authenticate Device </button>
      <p className='underline'> This is not my personal device </p>
    </div>
  )
}

export default Authenticate