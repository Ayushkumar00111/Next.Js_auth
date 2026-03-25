
import { NextResponse } from "next/server";

import Link from "next/link";




export default async function post(){

  
  

    let data = await fetch("http://localhost:3000/mongodb")
    data = await data.json();
   
    const ui = data.succes
 


    
    return(
        <div> <h1> Table api formate data</h1>
          <table border={1}>
            <thead>
                <tr>
                    <td>name</td>
                    <td>age</td>
                    <td>email</td>
                    <td>update</td>
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
 
<Link href={"/form/"+iteam._id}> Update</Link>
                    </td>
                </tr>
        ))  }
          </tbody>
        
    </table>
    </div>
    )
}