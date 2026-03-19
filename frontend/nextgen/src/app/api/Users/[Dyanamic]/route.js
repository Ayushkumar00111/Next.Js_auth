
import { NextResponse } from "next/server"
import { User } from "@/app/dyinamic"


export  async function GET(request){
const data = useParams();
return NextResponse.json(User)
}