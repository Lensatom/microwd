import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../../components'

const Index = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}

export default Index