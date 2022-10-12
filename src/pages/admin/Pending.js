import React from 'react'
import { FaCheck, FaMarker } from 'react-icons/fa'

const Pending = () => {

  const pendings = [
    ['Oreoluwa Victoria Olarewaju', '+2349039086400'],
    ['Ayomide Samuel Atayero', '+2349136852885']
  ]

  return (
    <div className='mt-16 w-full px-3'>
      <h2 className='font-bold'> Pending Accounts </h2>
      {pendings.map(pending => {
        return (
          <a href={`https://wa.me/${pending[1]}`} className='flex py-8 border-b-1 justify-between'>
            <div className='w-2/3 rounded-md flex items-start'>
              <div className='w-16 h-16 rounded-lg bg-gray-200'></div>
              <div className='flex ml-2 flex-col w-2/3'>
                <h2 className='text-lg font-semibold text-gray-500'> {pending[0]} </h2>
              </div>
            </div>
            <button className='text-sm w-16 h-16 py-3 rounded-full border-1 font-bold flex justify-center items-center'>
              <FaCheck className='text-lg font-semibold text-cyan-800' />
            </button>
          </a>
        )
      })}
    </div>
  )
}

export default Pending