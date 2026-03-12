"use client"
export default function Button({price}){
    console.log(price)
    return (
        <div>
            <button onClick={()=>{alert("what is wrong in it" +price)}}>Click me</button>
        </div>
    )
}