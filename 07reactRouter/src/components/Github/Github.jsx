import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()
    
    //for fetching data
    // const [data, setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ruhul-mirza')
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // },[])
    return(
        <>
        <div className="text-white text-center p-4 text-4xl font-semibold bg-gray-600 m-4">
            <div className="mb-8 mt-4 p-4">Github Name: {data.name}</div>
            <div className="mb-8 mt-4 p-4">Github Public_URL: {data.public_repos}</div>
        </div>
        </>

    )
}

export const gitInfo =async ()=>{
    const res = await fetch("https://api.github.com/users/ruhul-mirza")
    return res.json();
}