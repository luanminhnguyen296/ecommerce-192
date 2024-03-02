import React, { FormEvent } from 'react'
import thumb from '@/assets/loggin.png'
export default function Login() {

   // const { isLoading, isError, data, error } = useQuery({
   //    queryKey: ['todos'],
   //    queryFn: executiveLogin,
   //    enabled: false,
   // })

   async function executiveLogin(info) {

   }

   const form = useRef<HTMLFormElement>(null)
   function onSubmit(event: FormEvent) {
      event.preventDefault();
      console.log("🚀 ~ Login ~ form:", form.current?.target)
   }
   return (
      <div className='flex'>
         <div className='flex-1'>
            <img src={thumb} />
         </div>
         <form ref={form} onSubmit={onSubmit} className='flex flex-col flex-1 gap-y-3'>
            <FloatingLabel name='email' type='email' variant="standard" label="Email" />
            <FloatingLabel name='password' type='password' variant="standard" label="Password" />
            <Button type='submit'>Send</Button>
         </form>
      </div>
   )
}
