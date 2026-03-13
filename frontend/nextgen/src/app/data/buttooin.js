
export default function Button({price ,sendfun}){

    console.log(price)
    return (
        <div>
            <button style={{border:"2px white solid" , backgroundColor:"red"}} onClick={sendfun}>Click me</button>
        </div>
    )
}