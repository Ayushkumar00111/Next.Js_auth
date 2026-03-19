"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Api(){

    const ids = useParams();
    const id = ids.apis;

    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        async function getData(){
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setDatas(data.products);
        }
        getData();
    },[]);

    return(
        <div>
            <h1>there we get the api data</h1>
            <h1>{datas[id-1]?.id}</h1>
        </div>
    )
}
