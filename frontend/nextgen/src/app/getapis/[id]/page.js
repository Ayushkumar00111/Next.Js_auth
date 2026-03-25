"use client"
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

export default  function GET(){
const [name  , setname]=useState("");
const [age  , setage]=useState("");
const [email  , setemail]=useState("");
 const params = useParams();
 useEffect(()=>{
    async function api() {
  let id = params.id
        let data = await fetch(""+id)
    data = await data.json();
setname(data.reuslt.name)
setage(data.reuslt.age)
setemail(data.reuslt.email)
    }
api();
 },[])

      

     const update = async()=>{
    let data = await fetch("http://localhost:3000/help/"+params.id,{
        method:"Put",
        body:JSON.stringify({name , age , email})
    })
    data = await data.json();
    console.log(data)
     }
      
    return(
         <div className="form-container">
               <input 
          type="text" 
         placeholder="name enter"
value={name}
onChange={(e)=>setname(e.target.value)}
        /><br></br>

      
        <input 
          type="email" 
         placeholder="email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        /><br></br>
            <input 
          type="number" 
         placeholder="age enter"
value={age}
onChange={(e)=>setage(e.target.value)}
        /><br></br>

        <button onClick={update} className="btn" >Submit</button>
   </div>

          )
        }