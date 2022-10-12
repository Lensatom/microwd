import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminHeader, PageName } from '../components'

const Profile = () => {

  const [darkMode, setDarkMode] = useState()
  const fields = [
    {
      label: "Email",
      name: "email"
    },
    {
      label: "Full Name",
      name: "name"
    },
    {
      label: "Student Email",
      name: "student"
    },
    {
      label: "JAMB Reg.",
      name: "jamb"
    },
    {
      label: "Matric Number",
      name: "matric"
    },
    {
      label: "Phone Number",
      name: "phone"
    }
  ]
  const initialValues = {}

  return (
    <div className='flex flex-col px-3'>
      <AdminHeader />
      <div className='flex w-full items-center justify-between h-auto mt-16 border-gray-200'>
        <div className='flex w-full items-start overflow-hidden'>
          <div className='w-16 h-16 rounded-full bg-gray-200'></div>
          <div className='flex flex-col justify-between ml-2 overflow-hidden'>
            <p className='text-lg font-semibold text-gray-500'> Ayomide Samuel Atayero </p>
            <p className='text-xs text-cyan-800'> MCB / 231 / 124 </p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <PageName name="Personal Information" />
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
        >
          <Form className='mt-3'>
            {fields.map(field => {
              return (
                <React.Fragment key={field.name}>
                  <label className='text-gray-500 font-semibold'> {field.label} </label>
                  <Field
                    id={field.name}
                    name={field.name}
                    className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5"
                  />
                </React.Fragment>
              )
            })}
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Profile