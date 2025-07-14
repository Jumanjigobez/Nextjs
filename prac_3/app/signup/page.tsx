"use client";
import React, { useState } from 'react'

const Signup = () => {
    const [fname,setFname] = useState<String | null>(null),
        [email,setEmail] = useState<String | null>(null),
        [psk,setPsk] = useState<String | null>(null),
        [cpsk,setCpsk] = useState<String | null>(null);

    
  return (

    <>
    <div className="title">
        <h1 className="text-4xl text-blue-500 font-bold">Signup</h1>
    </div>

    <div className="form_part card card-border w-100 p-5 border-blue-500">
        <form className='card flex flex-col gap-5 w-full'>
            <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="fname">Full Name</label>
                <input type="text" name="fname" id="fname" required className='input w-full'  onChange={(e)=>setFname(e.target.value)}/>
            </div>

             <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required className='input w-full'  onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="psk">Password</label>
                <input type="password" name="psk" id="psk" required className='input w-full'  onChange={(e)=>setPsk(e.target.value)}/>
            </div>

            <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="cpsk">Confirm Password</label>
                <input type="password" name="cpsk" id="cpsk" required className='input w-full'  onChange={(e)=>setCpsk(e.target.value)}/>
            </div>

            <div className="input_group">
               <button type="submit" className='btn w-full bg-blue-500 hover:bg-transparent'>Sign up</button>
            </div>
        </form>
        <div className="input_group mt-5">
            <button className='btn w-full bg-transparent hover:bg-white-500'>Sign up with Google</button>
        </div>
    </div>
    </>
  )
}

export default Signup