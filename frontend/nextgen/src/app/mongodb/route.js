import mongoose from "mongoose";
import { product } from "./schema/page";

export async function GET() {
    await mongoose.connect(process.env.MONGODB);
    const data = await product.find();
    console.log(data)
    return Response.json({ result: "connected local db" ,succes :data});
}

export async function POST(request) {
    await mongoose.connect(process.env.MONGODB);
    const new_method = new product({
        name:"sunil",
        age:29,
        email:"@sunil"

    })
    const reuslt = await new_method.save();
    
    console.log(reuslt)
    return Response.json({ result: "connected local db" });
}