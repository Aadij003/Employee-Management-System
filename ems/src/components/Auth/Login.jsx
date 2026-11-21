import React, { useState } from 'react'

const Login = ({handleLogin}) => {


 
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
     e.preventDefault();

     handleLogin(email,password)

   setEmail("")
   setPassword("")
     
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
     <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center '>
            <input
             value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} required className='border-2 outline-none border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400' type='email' placeholder='Enter your email' />
            <input
              value={password}
             onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required className='border-2 outline-none border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
            <button className='border-2 outline-none border-none bg-green-500 hover:bg-green-600 py-3 px-27 font-bold rounded-full text-xl mt-5'>Log in</button>
        </form>
     </div>
    </div>
  )
}

export default Login
