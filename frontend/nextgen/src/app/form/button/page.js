"use client"

export default function Button (params){
 
  
    const deleteapi = async()=>{

        let data = await fetch("http://localhost:3000/help/"+params.id,{
            method:"Delete",
            
        });
             data = await data.json();
             
     
       alert(`Deleted: ${JSON.stringify(data)}`);

    }
    return (
        <button onClick={deleteapi}>Delete</button>
    )
}