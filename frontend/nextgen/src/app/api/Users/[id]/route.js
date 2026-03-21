import { NextResponse } from "next/server";
import { User } from "@/app/dyinamic";
export async function GET(req, content) {
  const params = await content.params;  // 👈 yaha fix hai
  const id =  params.id;
const data =  User
const pure = data.filter((item)=>item.id==id)


  return NextResponse.json(pure.length!==0?{reuslt:pure[0] ,success:true}:{reuslt:"not found",success:false},{status:299});
}
