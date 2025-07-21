"use client";
import React, { useEffect, useState } from 'react'

import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
import { AuthErrorCodes } from 'firebase/auth';

const Signin = () => {
    const [email, setEmail] = useState<String | null>(null),
          [psk, setPsk] = useState<String | null>(null),
          [loading, setLoading] = useState<Boolean>(false);
    
    const router = useRouter();
    
    const {SignInEmail, SignPop} = useAuth();

    const handleSignIn = (e: React.FormEvent) =>{
        e.preventDefault();

        
        if(email && psk){
            setLoading(true);

            SignInEmail(email, psk)
            .then(()=>{
                router.push("/")
            })
            .catch((error:any)=>{
                if(error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS){
                    alert("Invalid Credentials!");
                    setLoading(false);
                }else{
                    console.error("Error creating user:", error.code, error.message);
                }
               
                
            })
            
        }else{
            alert("Fields Empty")
        }
        }

    const handleSignInGoogle = () =>{
        SignPop()
        .then((data:any)=>{
            console.log(data);
            
            router.push("/");
        })
        .catch((error:any)=>{
            console.error("Error:",error)
        })
    }
   
  return (

    <>
    <div className="title">
        <h1 className="text-4xl text-blue-500 font-bold">Signin</h1>
    </div>

    <div className="form_part card card-border w-100 p-5 border-blue-500">
        <form className='card flex flex-col gap-5 w-full' method='post' onSubmit={(e)=>handleSignIn(e)}>
           
             <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required className='input w-full' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="input_group flex flex-col gap-2 w-full">
                <label htmlFor="psk">Password</label>
                <input type="password" name="psk" id="psk" required className='input w-full' onChange={(e)=>setPsk(e.target.value)}/>
            </div>

         

            <div className="input_group">
               <button type="submit" className='btn w-full bg-blue-500 hover:bg-transparent' disabled={loading && true}>Sign in</button>
            </div>
        </form>
        <div className="input_group mt-5">
            <button className='btn w-full bg-transparent hover:bg-white-500' onClick={handleSignInGoogle}>Sign in with Google</button>
        </div>
    </div>
    </>
  )
}

export default Signin