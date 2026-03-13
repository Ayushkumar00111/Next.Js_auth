"use client"

import { useState, useEffect } from "react";
import Button from "./buttooin";
import style from "@/user.module.css";

export default function Dat(){

  const [product,setProduct] = useState([]);
  const [use,setUse] = useState("red");

  const {head} = style;

  useEffect(()=>{

    const list = async ()=>{
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setProduct(data.products);
    }

    list();

  },[])
  
const clickto=()=>{
setUse("gren")
}

  return(
    <div>
      <h1>there we get the api data</h1>

      {product.map((item)=>(
        <div key={item.id}>
          <h1 className="main">{item.title}</h1>

          <h1 style={{backgroundColor:use=="red" ? "white":"black"}}>
            {item.description}
          </h1>
{
    use=="gren"?<h2>hello</h2>:null
}
          <h1 className={head}>{item.category}</h1>

          <Button price={item.price} sendfun={clickto}/>
        </div>
      ))}
    </div>
  )
}
