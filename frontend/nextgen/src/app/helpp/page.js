import Link from "next/link";
import { NextResponse } from "next/server";

async function api(){
    let data = await fetch("http://localhost:3000/api/Users");
    data = await data.json();
    return data
}
export default async function GET(){
    const data = await api();

    return (
       <div>
        {data.map(item=>(
      
            <Link href={`helpp/${item.id}`} key={item.age}>{item.name}</Link>

        ))}
        </div>
    )
}


export async function POST(request){
    const data = await request.json();

    if(!data.name){
        return NextResponse.json(
            { result: false, message: "Name is required" },
            { status: 400 }
        );
    }

    return NextResponse.json(
        { result: true },
        { status: 201 }
    );
}