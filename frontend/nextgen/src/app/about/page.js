"use client "
import Link from "next/link";

export default function About(){
    return(
        <>
        <h1>Hello i am user name </h1>
        <ul>
            <li><Link href="/about/amit">User 1</Link></li>
                  <li><Link href="/about/rahul">User 2</Link></li>
                        <li><Link href="/about/vijay">User 3</Link></li>
                              <li><Link href="/about/sharma">User 4</Link></li>
        </ul>
        <Link href="/">Go to home</Link>
        </>
    )
}