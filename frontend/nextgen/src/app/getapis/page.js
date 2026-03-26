
import { NextResponse } from "next/server";

import Link from "next/link";
import Delete from "./delete/page";




export default async function post(){

  
  

    let data = await fetch("http://localhost:3000/mongodb")
    data = await data.json();
   
    const ui = data.succes
 


    
    return(
        <div> <h1> Table api formate data</h1>
        <Link href={"/postapi"}>Add data</Link>
          <table border={1}>
            <thead>
                <tr>
                    <td>name</td>
                    <td>age</td>
                    <td>email</td>
                    <td>update</td>
                    <td>delete</td>
                </tr>
                </thead>
                <tbody>
        
   
   {
    ui.map((iteam)=>(
       
                <tr key={iteam._id}>
                    <td>
 {iteam.name}
                    </td>
                    <td>
     {iteam.age}
                    </td>
                    <td>
 
          {iteam.email}
                    </td>
                        <td>
 
<Link href={"/getapis/"+iteam._id}> Update</Link>
                    </td>
                    <td>
 
<Delete popo={iteam._id}/>
                    </td>
                </tr>
        ))  }
          </tbody>
        
    </table>
    </div>
    )
}