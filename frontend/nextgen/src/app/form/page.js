import Button from "./button/page";
import Link from "next/link";
const api=async()=>{
    let data = await fetch("http://localhost:3000/api/Users")
    data = await data.json();
   return data
}
export default async function GET(){
    

    const data = await api();

    
    return(
         <div>
            {data.map(iteam=>(
                <div key={iteam.id}>
                <Link href={`form/${iteam.id}`}>{iteam.name}</Link>
                <Link href={`form/${iteam.id}`}> edit</Link>
                <Button id={iteam.id}/>
                </div>
            ))}
        </div>  

    )
  }