import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const List = () => {

  const { search } = useLocation()
  console.log(search)

  return (
    <div>

    </div>
  )
}

export default List