"use client"

import { usePathname } from "next/navigation"
import Link from "next/link";
export default function Layout ({children}){
    const path = usePathname();
    console.log(path  )
    return(
        <div>
           
   <ul>
<l1>    <Link href="/">home</Link></l1>
<li>

<Link href="/login">login</Link>
</li>
</ul>
      
            
     {children}
        </div>
      

    )
}