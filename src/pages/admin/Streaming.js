import React from 'react'
import { FaPlus, FaStop, FaTrash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { PageName } from '../../components'

const Streaming = () => {

  const pendings = [
    ['Chemistry Tutorial A-Z', 'Chemistry Oven', 'live', '1321436', 'lab'],
    ['LIB 001 Class', 'ICAN LT', 'down', '1321435', 'lab']
  ]

  return (
    <div className='mt-16 w-full px-3'>
      <PageName name="Online Attendances" />
      <div className='w-16 h-16 absolute bottom-10 right-5 bg-cyan-800 flex justify-center items-center rounded-full shadow-lg'>
        <FaPlus className='text-white text-lg' />
      </div>
      {pendings.map(pending => {
        return (
          <NavLink to={`/admin/attendances/list?${pending[3]}`} className='flex bg-gray-100 rounded-md p-3 my-5 justify-between'>
            <div className='flex items-start'>
              <div className='w-16 h-16 rounded-lg bg-gray-200'></div>
              <div className='flex flex-col ml-2'>
                <h2 className='font-semibold text-gray-500'> {pending[0]} </h2>
                <p className='text-sm text-gray-500'> {pending[1]} </p>
              </div>
            </div>
            <div className='flex justify-center items-center w-16 h-16 rounded-full border-1 text-cyan-800'>
              {pending[2] == "live" ? <FaStop /> : <FaTrash className='text-red-400' />}
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Streaming