import Link from "next/link";
import { NextResponse } from "next/server";

async function api(id){
    let data = await fetch("http://localhost:3000/api/Users");
    data = await data.json();
    return data
}
export default async function GET(context){
    const params = await context.params

    const data = await api();
    console.log(data)
    return (
        <div>
            {data.map(iteam=>(
                <Link href={`help/${iteam.id}`}>{iteam.name}</Link>
            ))}
        </div>
    )
      
    
}