"use client"

import { useRouter } from "next/navigation";
import {  useState } from "react"
useRouter
export default function post(){
    const navi = useRouter();
    const [from , setfrom]=useState({
        name:"",
        age:"",
        email:""
    })
  
   

const dataftech=async()=>{
    let data = await fetch("http://localhost:3000/mongodb",{
        method:"Post",
        body:JSON.stringify(from)
    })
    data = await data.json();
  return navi.push("/getapis")
 
}

    
    return(
        <div>
     <h1>post api is here </h1>
        <input type="text" name="name" placeholder="enter name " value={from.name} onChange={(e)=>{setfrom({...from ,name: e.target.value})}}/><br/><br/>
          <input type="number" name="age" placeholder="enter age"value={from.age} onChange={(e)=>{setfrom({...from , age:e.target.value})}} /><br/><br/>
            <input type="text" name="email" placeholder="enter email " value={from.email} onChange={(e)=>{setfrom({...from , email:e.target.value})}}/><br/><br/>
            <button onClick={dataftech}> Submit</button>
          
        </div>
   
    )
}