"use client"
import { useState } from "react";
export default function from(){
    const [name, setname] = useState();
       const [age, setage] = useState();
          const [email, setemail] = useState();

    const appen=()=>{
console.log(name , age , email)
    }      
    return(
         <div className="form-container">
               <input 
          type="text" 
         
          name="name"  
          value={name} 
          onChange={(e)=>{setname(e.target.value)}} 
          required 
        />

      
        <input 
          type="email" 
         
          name="email" 
          value={email} 
          onChange={(e)=>{setemail(e.target.value)}} 
          required 
        />
            <input 
          type="number" 
         
          name="age" 
          value={age} 
          onChange={(e)=>{setage(e.target.value)}} 
          required 
        />

        <button onClick={appen()} type="submit">Submit</button>
   </div>

    )
}