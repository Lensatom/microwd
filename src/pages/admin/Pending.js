import React from 'react'

const Pending = () => {

  const pendings = [
    ['Doyin David Anifowose', '+23482173426', 'doyinsanis@gmail.com'],
    ['Doyin David Anifowose', '+23482173426', 'doyinsanis@gmail.com']
  ]

  return (
    <div className='mt-16 w-full px-3'>
      <h2 className=''> Pending Accounts </h2>
      {pendings.map(pending => {
        return (
          <div className='flex flex-col p-5 py-8 border-b-1'>
            <div className='w-full rounded-md flex items-center justify-between'>
              <div className='w-16 h-16 rounded-full bg-gray-200'></div>
              <div className='w-3/4 flex flex-col items-end'>
                <h2 className='text-lg font-semibold text-gray-500'> {pending[0]} </h2>
                <a href={`https://wa.me/${pending[1]}`} className='text-xs underline text-gray-400'> {pending[1]} </a>
              </div>
            </div>
            <button className='bg-gray-200 text-sm py-3 mt-5 rounded-md text-gray-500 font-bold'> Authenticate Now </button>
          </div>
        )
      })}
    </div>
  )
}

export default Pending