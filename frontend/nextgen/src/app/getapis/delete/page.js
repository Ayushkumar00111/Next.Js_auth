"use client"

import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";


export default function Delete(props){
    const navi = useRouter();
const id = props.popo;
    const fun=async()=>{
         let data = await fetch("http://localhost:3000/mongodb/"+id,{
            method:"Delete"
         })
         data = await data.json();
return navi.push("getapis")
    }
return (
    <div>
        <button onClick={fun}>delete</button>
    </div>
)
}