"use client"
import { useState } from "react"
export default function upload(){
    const [data , setdata]=useState();
    const fun =(e)=>{
      
       console.log(data)
    }
    return(
        <div>
            <h1> add files</h1>
            <form action={fun}>
   <input type="file" onChange={(e)=>{setdata(e.target.files?.[0])}}/>
            <button >ADD photo / files</button>
            </form>
         
        </div>
    )
}
