import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const AdminHeader = () => {

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const addys = pathname.split('/');
  const addy = addys[addys.length - 1]
  console.log(addys)

  const previous = () => {
    let to = ""
    if (addys.length == 3) {
      to = '/admin'
    } else {
      for (let i = 1; i < addys.length - 1; i++) {
        to = `${to}/${addys[i]}`
      }
    }
    console.log(to)
    navigate(to)
  }

  return (
    <div className='flex w-full p-3 border-b bg-white fixed top-0 left-0 text-sm font-semibold justify-between items-center'>
      {addy == 'admin' ? <p> Admin </p> : <FaArrowLeft onClick={() => previous()} />}
      <p> Microwd </p>
    </div>
  )
}

export default AdminHeader