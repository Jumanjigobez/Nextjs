"use client";

import { getDocs, collection} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase/firebase";
import { useAuth } from "./context/authContext";



type JokeFromFirestore = {
  setup: string;
  punchline: string;
};

type Joke = JokeFromFirestore & {
  id: string;
};

type Jokes = Joke[];

export default function Home() {
  const [jokes, setJokes] = useState<Jokes>([]);

  const {user} = useAuth();

  useEffect(()=>{
   const fetchJokes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jokes"));
       const jokesArray: Jokes = querySnapshot.docs.map(doc => {
          const data = doc.data() as JokeFromFirestore;
          return {
            id: doc.id,
            ...data
          };
        });

        setJokes(jokesArray);

      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();

  },[])

  console.log(user)
  return (
    <>
      <div className="title">
        <h1 className="text-4xl text-blue-500 font-bold">Pro Jokes</h1>
      </div>

      <div className="flex flex-col gap-7 text-2xl">
        {user && user.emailVerified && jokes ? 
          jokes.map((joke: Joke)=>(
            
            <div className="flex flex-col gap-3 pt-2 pb-2 border-t-2 border-b-2 " key={joke.id}>
              <p>Q: {" "}{joke.setup}</p>
              <p className="text-green-400">A: {" "}{joke.punchline}</p>
            </div>
                   
          )
            
          )
        :(
          <>
          <div className="flex flex-col gap-3 pt-2 pb-2 border-t-2 border-b-2 ">
            <p>Q: {" "}What do you call a fake noodle?</p>
            <p className="text-red-400">A: {" "}{user && user.emailVerified ? "you need to sign in to see the punchline!" : "you need to verify your email to see the punchline!"}</p>
          </div>

          <div className="flex flex-col gap-3 pb-2 border-b-2">
            <p>Q: {" "}Why did the scarecrow get promoted?</p>
            <p className="text-red-400">A: {" "}{user && user.emailVerified ? "you need to sign in to see the punchline!" : "you need to verify your email to see the punchline!"}</p>
          </div>

          <div className="flex flex-col gap-3 pb-2 border-b-2">
            <p>Q: {" "}Why do bees have sticky hair?</p>
            <p className="text-red-400">A: {" "}{user && user.emailVerified ? "you need to sign in to see the punchline!" : "you need to verify your email to see the punchline!"}</p>
          </div>
          </>

        )}
        
      </div>
    </>
   
  );
}
