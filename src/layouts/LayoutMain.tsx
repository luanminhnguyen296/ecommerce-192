import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
export default function LayoutMain() {
   return (
      <div>
         Layout trang chủ

         <div className='main-content'>
            <Outlet />
         </div>
         <Footer />
      </div>
   )
}
