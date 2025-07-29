"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/authContext';
import { AuthErrorCodes } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';


//configure firebaseui

const Signup = () => {
    const [fname,setFname] = useState<String | null>(null),
        [email,setEmail] = useState<String | null>(null),
        [psk,setPsk] = useState<String | null>(null),
        [cpsk,setCpsk] = useState<String | null>(null),
        [loading, setLoading] = useState<Boolean>(false);
    
    const router = useRouter();

    const {SignUpEmail, SignPop, SendVerification} = useAuth();

    const handleSignup = (e: React.FormEvent) =>{
        e.preventDefault();

        
        if(psk === cpsk){
            setLoading(true);

            SignUpEmail(email, psk)
            .then((data:any)=>{
                // console.log(data)

                setDoc(doc(db, 'users', data.user.uid), {
                    email: email,
                    fullName: fname,
                    createdAt: new Date().toISOString(),
                }).then(()=>{
                    console.log("User Stored Successfully");
                })


                SendVerification()
                .then(()=>{
                    alert("Email Verification Sent");

                    router.push("/")
                })
                
            })
            .catch((error:any)=>{
               setLoading(false);

               if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
                    alert("The password is too weak.");
                } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
                    alert("The email address is invalid.");
                } else if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
                    alert("The email address already exists.");
                } else {
                    console.error("Error creating user:", error.code, error.message);
                }
            })
            
        }else{
            alert("Password Missmatch");
            setLoading(false);
        }
    }

    const handleSignupGoogle = () =>{
       
        SignPop()
        .then((data:any)=>{
            console.log(data);

            setDoc(doc(db, 'users', data.user.uid), {
                email: data.user.email,
                fullName: data.user.displayName,
                createdAt: new Date().toISOString(),
            }).then(()=>{
                console.log("User Stored Successfully");
            })

            !data.user.emailVerified &&
            SendVerification()
                .then(()=>{
                    alert("Email Verification Sent");

                   
            });

            router.push("/")

        })
        .catch((error:any)=>{
            console.error("Error:",error)
        })
            
                
        
    }
    
  return (

    <>
    <div className="title">
        <h1 className="text-4xl text-blue-500 font-bold">Signup</h1>
    </div>

    <div className="form_part card card-border w-100 p-5 border-blue-500">
        <form className='card flex flex-col gap-5 w-full' method='post' onSubmit={(e)=>handleSignup(e)}>
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
               <button type="submit" className='btn w-full bg-blue-500 hover:bg-transparent' disabled={loading && true}>Sign up</button>
            </div>
        </form>
        <div className="input_group mt-5">
            <button className='btn w-full bg-transparent hover:bg-white-500' onClick={handleSignupGoogle}>Sign up with Google</button>
        </div>
    </div>
    </>
  )
}

export default Signup