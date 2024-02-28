import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LayoutAuth() {
   return (
      <div>
         Layout trang login
         <Outlet />
      </div>
   )
}
