"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { Base_url } from "@/config/constent";

export default function Home() {

  const navigate = useRouter();

  const [name,setname]=useState("empty");
  return (
    <div>
<ul>
<li>
<Link href="/about">about</Link>
</li>
<li>
<Link href="/login">login</Link>
</li>


</ul>
<h1>wellcome to home screen</h1>
  <Image src="/radha.jpg" width={200} height={200} alt="radha" />
     {
      Base_url
     }
    </div>
  )

}