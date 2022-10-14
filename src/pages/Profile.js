import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AdminHeader, PageName } from '../components'

const Profile = () => {

  const initialValues = {
    email: 'ayomidetommiwa@gmail.com',
    name: 'Atayero Ayomide Samuel',
    student: 'ayomideatayero@student.oauife.edu.ng',
    jamb: '21318681BF',
    matric: 'nill',
    phone: '+2349079948491'
  }

  const [email, setEmail] = useState(initialValues['email'])
  const [name, setName] = useState(initialValues['name'])
  const [student, setStudent] = useState(initialValues['student'])
  const [jamb, setJamb] = useState(initialValues['jamb'])
  const [matric, setMatric] = useState(initialValues['matric'])
  const [phone, setPhone] = useState(initialValues['phone'])
  
  useEffect(() => {
    const variables = {
      email,
      name,
      student,
      jamb,
      matric,
      phone
    }
    const keys = Object.keys(variables);
    for(let i = 0; i < keys.length; i++) {
      const checker = document.getElementById(`${keys[i]}c`);
      if (variables[keys[i]] !== initialValues[keys[i]]) {
        checker.className = 'block text-cyan-800';
      } else {
        checker.className = "hidden";
      }
    }
  }, [email, name, phone, matric, student, jamb])

  const checkChange = (id, e) => {
    switch (id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "student":
        setStudent(e.target.value);
        break;
      case "jamb":
        setJamb(e.target.value);
        break;
      case "matric":
        setMatric(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  }

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
        <form className='mt-3'>
          <label className='text-gray-500 font-semibold text-sm'> Email </label>
          <div className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5 flex items-center justify-between">
            <input
              id='email'
              name='email'
              className='w-3/4 outline-none'
              value={email}
              onChange={(e) => checkChange('email', e)}
            />
            <div id="emailc" className='hidden'>
              <FaCheck />
            </div>
          </div>
          <label className='text-gray-500 font-semibold text-sm'> Full Name </label>
          <div className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5 flex items-center justify-between">
            <input
              id='name'
              name='name'
              className='w-3/4 outline-none'
              value={name}
              onChange={(e) => checkChange('name', e)}
            />
            <div id="namec" className='hidden'>
              <FaCheck />
            </div>
          </div>
          <label className='text-gray-500 font-semibold text-sm'> Student Email </label>
          <div className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5 flex items-center justify-between">
            <input
              id='student'
              name='student'
              className='w-3/4 outline-none'
              value={student}
              onChange={(e) => checkChange('student', e)}
            />
            <div id="studentc" className='hidden'>
              <FaCheck />
            </div>
          </div>
          <label className='text-gray-500 font-semibold text-sm'> Jamb Reg. </label>
          <div className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5 flex items-center justify-between">
            <input
              id='jamb'
              name='jamb'
              className='w-3/4 outline-none'
              value={jamb}
              onChange={(e) => checkChange('jamb', e)}
            />
            <div id="jambc" className='hidden'>
              <FaCheck />
            </div>
          </div>
          <label className='text-gray-500 font-semibold text-sm'> Matric Number </label>
          <div className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5 flex items-center justify-between">
            <input
              id='matric'
              name='matric'
              className='w-3/4 outline-none'
              value={matric}
              onChange={(e) => checkChange('matric', e)}
            />
            <div id="matricc" className='hidden'>
              <FaCheck />
            </div>
          </div>
          <label className='text-gray-500 font-semibold text-sm'> Phone Number </label>
          <div className="w-full rounded-md text-sm border-1 p-2 mt-2 mb-5 flex items-center justify-between">
            <input
              id='phone'
              name='phone'
              className='w-3/4 outline-none'
              value={phone}
              onChange={(e) => checkChange('phone', e)}
            />
            <div id="phonec" className='hidden'>
              <FaCheck />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile