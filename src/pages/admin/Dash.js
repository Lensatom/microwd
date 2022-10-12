import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageName } from '../../components'

const Dash = () => {
  return (
    <>
      <div className='mt-16 px-3 mb-5'>
        <PageName name="Dasboard" />
      </div>
      <div className='pb-5 grid grid-cols-1 gap-4 px-3 grid-rows-4 h-screen'>
        <NavLink to="/admin/pending" className='bg-yellow-100 rounded-md p-3 text-sm text-gray-500'>
          Pending Accounts
          <h2 className='text-3xl font-bold text-yellow-500'> 20 </h2>
        </NavLink>
        <NavLink to='/admin/attendances' className='bg-purple-100 font-semibold rounded-md p-3 text-sm text-purple-500'>
          <p className='w-1/4 text-gray-500'> Attendances </p>
          <h2 className='text-3xl font-bold'> 20 </h2>
        </NavLink>
        <NavLink to='coursemates' className='bg-green-100 font-semibold rounded-md p-3 text-sm text-gray-500'>
          Coursemates
          <h2 className='text-3xl font-bold text-green-500'> 300 </h2>
        </NavLink>
        <NavLink to='admins' className='bg-pink-100 font-semibold rounded-md p-3 text-sm text-gray-500'>
          Admins
          <h2 className='text-3xl font-bold text-pink-500'> 7 </h2>
        </NavLink>
      </div>
    </>
  )
}

export default Dash