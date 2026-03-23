 import mongoose from "mongoose";
import {  NextResponse } from "next/server"
import { URL } from "../db/db";


export async function  GET() {
     await mongoose.connect(URL);
    console.log(URL)
    return NextResponse.json({result:"suucess"},{status:201})
}
