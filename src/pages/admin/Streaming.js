import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Streaming = () => {

  const pendings = [
    ['Chemistry Tutorial A-Z', 'Chemistry Oven', 'live', '1321436', 'lab'],
    ['LIB 001 Class', 'ICAN LT', 'down', '1321435', 'lab']
  ]

  return (
    <div className='mt-16 w-full px-3'>
      <h2 className=''> Pending Accounts </h2>
      <div className='w-16 h-16 absolute bottom-10 right-5 bg-blue-800 flex justify-center items-center rounded-full shadow-lg'>
        <FaPlus className='text-white text-lg' />
      </div>
      {pendings.map(pending => {
        return (
          <NavLink to={`/admin/attendances/list?${pending[3]}`} className='flex flex-col bg-gray-100 rounded-md p-3 my-5'>
            <div className='w-full rounded-md flex items-center justify-between'>
              <div className='w-16 h-16 rounded-full bg-gray-600'></div>
              <div className='w-3/4 flex flex-col items-end'>
                <h2 className='text-lg font-semibold text-gray-700'> {pending[0]} </h2>
                <p className='text-sm text-gray-500'> {pending[1]} </p>
              </div>
            </div>
            <div className='w-full justify-between flex items-center mt-3'>
              <div className='w-16 flex justify-center items-center'> <FaPlus /> </div>
              <button className={`${pending[2] == "live" ? "bg-gray-600" : "bg-red-600"} shadow-md w-1/2 text-sm py-3 rounded-md text-white font-semibold`}>
                {pending[2] == "live" ? "Bring Down" : "Delete"}
              </button>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Streaming