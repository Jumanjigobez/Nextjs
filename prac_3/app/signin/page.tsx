"use client";
import React, { useEffect, useState } from 'react'

import { useAuth } from '../context/authContext';

const Signin = () => {
    const [email, setEmail] = useState<String | null>(null),
          [psk, setPsk] = useState<String | null>(null);
    
    const {SignIn} = useAuth();

    // useEffect(()=>{
    //    console.log(email, psk);
    // },[email, psk])
   
  return (

    <>
    <div className="title">
        <h1 className="text-4xl text-blue-500 font-bold">Signin</h1>
    </div>

    <div className="form_part card card-border w-100 p-5 border-blue-500">
        <form className='card flex flex-col gap-5 w-full'>
           
             <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required className='input w-full' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="psk">Password</label>
                <input type="password" name="psk" id="psk" required className='input w-full' onChange={(e)=>setPsk(e.target.value)}/>
            </div>

         

            <div className="input_group">
               <button type="submit" className='btn w-full bg-blue-500 hover:bg-transparent'>Sign in</button>
            </div>
        </form>
        <div className="input_group mt-5">
            <button className='btn w-full bg-transparent hover:bg-white-500' onClick={SignIn}>Sign in with Google</button>
        </div>
    </div>
    </>
  )
}

export default Signin