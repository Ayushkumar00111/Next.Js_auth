import { NextResponse } from "next/server";
import { product } from "../schema/page";
import mongoose from "mongoose";
export async function PUT(request , content) {

   
    const jsondata = await request.json();
   const reuslt = await content.params
const id = {_id:reuslt.id}
    console.log(id ,jsondata)
    try {
           await mongoose.connect(process.env.MONGODB);
 const data = await  product.findOneAndUpdate(id,jsondata);  
 
    return NextResponse.json({ result: "put success fully" ,success:data },{status:201});
    } catch (error) {
        return NextResponse.json({error:"internal error"})
    }

}
export async function GET(request , content ) {
    await mongoose.connect(process.env.MONGODB);
    const reuslt = await content.params
const id = {_id:reuslt.id}
let data = await product.findById(id)
// data = await data.json();
return NextResponse.json({reuslt:"succsszz",success:data})
}
export async function DELETE(request , content ) {
    await mongoose.connect(process.env.MONGODB);
    const reuslt = await content.params
const id = {_id:reuslt.id}
let data = await product.findByIdAndDelete(id)
// data = await data.json();
return NextResponse.json({reuslt:"succsszz",success:data})
}