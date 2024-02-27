import React from 'react'
import Logo from '@/assets/react.svg?react'
import { Button } from 'flowbite-react';

function Hello() {
   return (
      <div className='text-3xl font-bold underline'>
         Hello
         {/* <img src={logo} /> */}
         <Logo />
         <Button pill>Default</Button>
      </div>
   )
}

export default Hello
