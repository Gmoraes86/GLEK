import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
  return (
    <>
      <div>Container</div>
      <Outlet />
     </>
  )
}

export default Container