"use client"
import { useSelector } from "react-redux"

export default function Userlist(){
    const payload = useSelector(
        (state)=>state.users
    );
    console.log(    JSON.stringify(payload)+"userlist")
    return (
        <div>
            <h1>User List</h1>
            {
                payload.map((iteam)=>(
                    <h1 key={iteam.id}>{iteam.name}</h1>
                ))
            }
        </div>
     
    )
}