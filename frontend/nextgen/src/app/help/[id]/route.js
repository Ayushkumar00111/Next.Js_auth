
import { NextResponse } from "next/server";

const apidata=async(id)=>{
    let data = await fetch("http://localhost:3000/api/Users/"+id)
    data = await data.json();
    return data.reuslt
}
export  async function GET(request , context){
    const params =await context.params
    const data = await apidata(params.id);
    console.log(data)

    return NextResponse.json({result:"success",data:{data}
    },{status:201})
}
export  async function POST(request){
    const data =  await request.json();
    console.log(data)
if(!data.name || !data.age || !data.email){
     return NextResponse.json({result:"fail"
    },{status:401}) 
}

    return NextResponse.json({result:"success"
    },{status:201})
}
export  async function PUT(request){
    const data =  await request.json();
    console.log(data)
if(!data.name || !data.age || !data.email){
     return NextResponse.json({result:"fail"
    },{status:401}) 
}

    return NextResponse.json({result:"success"
    },{status:201})
}