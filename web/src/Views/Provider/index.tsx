import React from 'react'
import { Outlet } from 'react-router-dom'

const Provider = () => {
  return (
    <>
    <div>Provider as</div>
    <Outlet />
    </>
  )
}

export default Provider