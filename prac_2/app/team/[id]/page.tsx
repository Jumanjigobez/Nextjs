"use client";

import { useState, use, useEffect} from "react";

interface TeamIdProps {
    params: Promise<{
      id: number;
    }>;
  }

type Details = {
  name: String,
  title: String
}

const TeamId = ({params}: TeamIdProps) => {
    const {id} = use(params),
        [details, setDetails] = useState<Details>({
          name: '',
          title: ''
        }),
        [loading, setLoading] = useState(true);

        useEffect(()=>{
          fetch(`https://dynamic-routes--dundermifflininc.netlify.app/.netlify/functions/team?id=${id}`)
          .then((res)=>res.json())
          .then((data)=>{
              setDetails(data);
              setLoading(false);
          })
          .catch(err=>console.log(err));
        }, [id])
     
    
    
     

    // console.log(details);
  return (
    <>
     {loading ? (
        <h2>Please Wait...</h2>
    ): 
        (
          <>
          {!details.name && !details.title ? (
            <h1 className="text-red-500 text-2xl">
              {`Oops! We couldn't find the requested employee.`}
            </h1>
          ) : (
            <>
              <h1 className="text-red-300 text-4xl">{details.name}</h1>
              <p className="text-2xl">{details.title}</p>
            </>
          )}
        </>
        )
      
    }
    </>
  )
}

export default TeamId