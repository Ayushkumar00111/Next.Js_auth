"use client"
import { useState } from "react"
export default function upload(){
    const [data , setdata]=useState();
    const fun = async(e)=>{
      
  e.preventDefault();
        if (!data) {
            alert("Please select a file");
            return;
        }
    

       const form = new FormData();
       form.set("file",data)
       const result = await fetch("http://localhost:3000/upload/uploadapi",{
        method:"Post",
        body: form
       })
    }
    return(
        <div>
            <h1>  files</h1>
            <form onSubmit={fun}>
   <input type="file" onChange={(e)=>{setdata(e.target.files?.[0])}}/>
            <button >ADD photo / files</button>
            </form>
         
        </div>
    )
}
