"use client";

import Link from "next/link";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

type userDataType = {
    createdAt: string,
    email: string,
    fullName: string
}
const Header = () => {
    const [userData, setUserData] = useState<userDataType>();
    const {user, LogOut} = useAuth();
    const router = useRouter();

    const handleSignOut  = () =>{
        LogOut()
        .then(()=>{
            router.push("/signin")
        })
        
    }
    
    useEffect(() => {
        if (!user?.uid) return;

        const fetchUserData = async () => {
            try {
                const docSnap:any = await getDoc(doc(db, 'users', user.uid));
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData(data);
                } else {
                    console.error("No such document!");
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchUserData();
    }, [user?.uid]);
    // console.log(user);
  return (
    <header className=" bg-blue-500 w-screen pt-5 pb-5 flex justify-around items-center lg:flex-row max-[800px]:flex-col">
        <div className="logo_part">
            <h1 className="text-4xl font-extrabold">ProJokes</h1>
        </div>
        <nav>
            <ul className="flex items-center justify-center gap-5 text-2xl">
                
                
                {!user ? (
                    <>
                    <li>
                        <Link href="/" className="hover:text-gray-700">
                            Home
                        </Link>
                    </li>

                     <li>
                        <Link href="/signup" className="hover:text-gray-700">
                            Signup
                        </Link>
                    </li>

                    <li>
                        <Link href="/signin" className="hover:text-gray-700">
                            Signin
                        </Link>
                    </li>
                    </>
                ):(
                    <>
                    <li>
                        <span className="text-2.5xl text-green-400">Welcome</span>
                    </li>

                    <li>
                        <span className="text-2.5xl text-green-400">{userData ? userData.fullName : user.email}</span>
                    </li>

                    <li>
                        <Link href="#" className="hover:text-gray-700" onClick={handleSignOut}>
                            Signout
                        </Link>
                    </li>

                    
                    </>
                )}
                
            </ul>
        </nav>
    </header>
  )
}

export default Header