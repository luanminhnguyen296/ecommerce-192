import { Outlet } from 'react-router-dom'

export default function LayoutAuth() {
   return (
      <div>
         <LayoutAuthHeader />
         <Outlet />
         <LayoutAuthFooter />
      </div>
   )
}
