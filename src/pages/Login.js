import { Field, Form, Formik } from 'formik'
import { FaBook, FaConnectdevelop, FaPlus } from 'react-icons/fa'
import React from 'react'

const Login = () => {

  const initialValues = {
    email: '',
    password: ''
  }

  return (
    <div className='flex flex-col w-full h-screen justify-between pb-5 px-3'>
      <div className='w-full flex justify-between items-center py-3 border-b'>
        <p> Logo </p>
        <p> Microwd </p>
      </div>
      <div className='flex flex-col'>
        <p className="text-3xl mt-1 font-semibold text-cyan-800"> I'M <br /> PRESENT </p>
        <p className='text-sm text-gray-500 f'> I don't need to wait to prove it </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {

        }}
      >
        <Form className='w-full'>
          <label className='font-semibold'> Email </label>
          <Field name="email" id="email" className='w-full mt-2 mb-5 py-3 rounded-md px-2 bg-gray-100' type='text' placeholder='Your mail addy' />
          <label className='font-semibold'> Password </label>
          <Field name="password" id="password" className='w-full mt-2 mb-5 py-3 rounded-md px-2 bg-gray-100' type='password' placeholder='Password here' />
          <button className='w-full rounded-md font-semibold mt-2 py-3 text-sm bg-cyan-800 text-white'> Login </button>
          <div className='flex w-full justify-between items-center mt-5'>
            <p className='text-sm text-gray-500'> Forgot Password? </p>
            <p className='text-sm text-gray-500'> Create Account </p>
          </div>
        </Form>
      </Formik>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
        </div>
      </div>
    </div>
  )
}

export default Login