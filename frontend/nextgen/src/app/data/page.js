import Button from "./buttooin";


async function list() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}
export default async function dat(){
let product = await list();
   
   return(
    <div>
    <h1> there we get the api data </h1>
   {
    product.map((item)=>(
 <div key={item.id}>
      <h1 key={item.id}>{item.title}</h1>

  <Button price={item.price}/>
</div>
    ))
   }

    </div>
   ) 
}