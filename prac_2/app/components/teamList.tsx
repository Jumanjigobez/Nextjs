"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Team ={
    id: number,
    name: String,
    title: String
}

const TeamList = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://fetch-data--dundermifflininc.netlify.app/.netlify/functions/team")
        .then(res => res.json())
        .then((data)=>{
            setTeam(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    // console.log(team)
  return (
    <>
    {loading ? (
        <h2>Please Wait...</h2>
    ):(
        <ol className="flex flex-col align-self-start gap-5 w-100 text-2xl">
            {team.map((t:Team)=>(
                <li key={t.id}>
                <Link href={`/team/${t.id}`} className="hover:text-blue-500">{t.name}</Link>
                </li>
            ))}
        </ol>
    )}
    </>
    
  )
}

export default TeamList