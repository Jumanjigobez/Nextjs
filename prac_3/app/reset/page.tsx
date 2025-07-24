"use client";

import React, { useState } from 'react'
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';

const Reset = () => {
    const [email, setEmail] = useState<String | null>(null),
        [loading, setLoading] = useState<Boolean>(false),
        [emailSent, setEmailSent] = useState<Boolean>(false);

    const router = useRouter();
    
    const {SendReset} = useAuth();

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();

        if(email){
            setLoading(true);

            SendReset(email)
            .then(()=>{
                setEmailSent(true);
                
                // router.push("/signin")
            })
            .catch((e:any)=>{
                setLoading(false);
                setEmailSent(false);
                console.error(e)
            })
        }
        

    }
    return (
        <>
            <div className='title'>
                <h1 className="text-4xl text-blue-500 font-bold">Reset Password</h1>
            </div>

            {emailSent ? (
                <p className='text-3xl'>Check your email for a link to reset your password.</p>
            ):(
                 <div className="form_part card card-border w-100 p-5 border-blue-500">
                    <form className='card flex flex-col gap-5 w-full' method='post' onSubmit={(e) => handleReset(e)}>

                        <div className="input_group flex flex-col gap-2 w-full">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required className='input w-full' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="input_group">
                            <button type="submit" className='btn w-full bg-blue-500 hover:bg-transparent' disabled={loading && true}>Send Password Reset Link</button>
                        </div>
                    </form>

                </div>
            )}
           
        </>
    )
}

export default Reset