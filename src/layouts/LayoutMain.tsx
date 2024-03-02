import { Outlet } from 'react-router-dom'
export default function LayoutMain() {
   return (
      <div className='text-primary bg-gray-store'>
         <LayoutHeader />
         <div className='main-content'>
            <Outlet />
         </div>
         <LayoutFooter />
      </div>
   )
}
