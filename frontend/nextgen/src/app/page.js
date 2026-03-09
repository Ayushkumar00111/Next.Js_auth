'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const navigate = useRouter();

  const [name,setname]=useState("empty");
  return (
    <div className="  dark:bg-black">
     
<h1>Hello ji sabn thik thakk.................{name}...................</h1>
<br></br>
{
Child()
}
<br></br>
<button onClick={()=>{navigate.push('/login/student')}} style={{border:"1px solid white"}}> click me </button>
    <Link href="/login">Go to home</Link>
    <button onClick={()=>{navigate.push('/login/teacher')}} style={{border:"1px solid white"}}> click me </button>
    <Link href="/login">Go to home</Link>
    </div>
  );
}

const Child =()=>{
return(
  <dib>
    <h1>
      
      hello ji iam child 
    </h1>
  </dib>
)

}