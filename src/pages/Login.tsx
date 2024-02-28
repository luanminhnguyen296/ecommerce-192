import React, { FormEvent } from 'react'

export default function Login() {
   const form = useRef<HTMLFormElement>(null)
   function onSubmit(event: FormEvent) {
      event.preventDefault();
      console.log("🚀 ~ Login ~ form:", form.current?.target)
   }
   return (
      <div>
         <form ref={form} onSubmit={onSubmit}>
            <FloatingLabel name='name' variant="filled" label="Label" />
            <FloatingLabel name='email' type='email' variant="outlined" label="Label" />
            <FloatingLabel name='password' type='password' variant="standard" label="Label" />
            <Button type='submit'>Send</Button>
         </form>

      </div>
   )
}
