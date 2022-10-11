import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom'

const AdminHeader = () => {

  const { pathname } = useLocation()
  const addys = pathname.split('/');
  const addy = addys[addys.length - 1]

  return (
    <div className='flex w-full p-3 border-b bg-white fixed top-0 left-0 text-sm font-semibold justify-between items-center'>
      {addy == 'admin' ? <p> Admin </p> : <NavLink to='/admin'> <FaArrowLeft /> </NavLink>}
      <p> Microwd </p>
    </div>
  )
}

export default AdminHeader