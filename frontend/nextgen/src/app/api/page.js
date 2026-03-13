"use client"
import { useEffect , useState } from "react"
export default  function Api(){
      const url ='https://dummyjson.com/products'
      const [product,setproduc]=useState([]);
    useEffect(()=>{
const fetchData = async ()=> {
    // You can await here
      let data = await fetch(url)
     data = await data.json();
     setproduc(data.products)


    // ...
  }
  fetchData();

    },[])
  
 console.log(product)
   return(
    <div>
    <h1> there we get the api data </h1>
   {
    product.map((item)=>(
      <h1 key={item.id }>{item.title}</h1>
    ))
   }
    </div>
   ) 
}

