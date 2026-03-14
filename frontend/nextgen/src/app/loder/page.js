const apii =async()=>{
  let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users
   
}

export default async function Loder(){
//     let data = await fetch("https://dummyjson.com/users");
//     data = await data.json();
  const user = await apii();

    return(
        <div>
            <h1>Hello iam api before loding animation tech you</h1>
            {
                user.map(item=>(
                    <h1 key={item.id}>Name : {item.firstName}</h1>
                ))
            }
        </div>
    )
}