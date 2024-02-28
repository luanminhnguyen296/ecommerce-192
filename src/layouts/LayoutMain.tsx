import { Outlet } from 'react-router-dom'
export default function LayoutMain() {
   return (
      <div>
         <LayoutHeader />
         <div className='main-content'>
            <Outlet />
         </div>
         <LayoutFooter />
      </div>
   )
}
