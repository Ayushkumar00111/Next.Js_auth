import { NextResponse } from "next/server";

import { User } from "@/app/dyinamic";
export async function GET() {
  
 
    
    return NextResponse.json(User,{status:299})
   
    
}