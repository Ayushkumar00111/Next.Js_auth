import mongoose from "mongoose";
import { product } from "./schema/page";

export async function GET() {
    await mongoose.connect(process.env.MONGODB);
    try {
          const data = await product.find();
   
    return Response.json({ result: "get success" ,succes :data});
    } catch (error) {
        return Response.json({reuslt:"internal eror "},{status:505})
    }
 
}

export async function POST(request) {
    await mongoose.connect(process.env.MONGODB);
    const playload = await request.json()
    const new_method = new product(playload)
    const reuslt = await new_method.save();
    
    console.log(reuslt)
    return Response.json({ result: "post are done" });
}
