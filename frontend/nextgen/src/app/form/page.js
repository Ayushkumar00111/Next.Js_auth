"use client"

import "./form.css"
import { useState } from "react";
export default function from(){
    const [name, setname] = useState('');
       const [age, setage] = useState('');
          const [email, setemail] = useState('');
    const appkafun = async ()=>{
        let data = await fetch("http://localhost:3000/help/1",{
            method:"Post",
            body:JSON.stringify({name , age , email })
        })
        data = await data.json();
        console.log(data )
    }      
    return(
         <div className="form-container">
               <input 
          type="text" 
         placeholder="name enter"
          value={name} 
          onChange={(e)=>{setname(e.target.value)}} 
  
        />

      
        <input 
          type="email" 
         placeholder="email"
        
          value={email} 
          onChange={(e)=>{setemail(e.target.value)}} 
        
        />
            <input 
          type="number" 
         placeholder="age enter"
   
          value={age} 
          onChange={(e)=>{setage(e.target.value)}} 
   
        />

        <button onClick={appkafun} className="btn" type="submit">Submit</button>
   </div>

    )
}