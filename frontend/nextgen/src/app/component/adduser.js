"use client"

import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

export default function Adduser(){
    const [data , setdata]=useState();
        const dispatch = useDispatch();
   const fun = () => {
  dispatch(addUser(data));
   // reset input
};
    return (
   <div>
        <input type="text" placeholder=" enter user" onChange={(e)=>{setdata(e.target.value)}} />
        <button onClick={fun}>submit</button>
   </div>
    )
}