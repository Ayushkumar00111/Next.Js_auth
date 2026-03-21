
async function api(id){
    let data = await fetch("http://localhost:3000/api/Users/"+id);
    data = await data.json();
    return data.reuslt
}
export default async function GET(context){
    const params = await context.params

    const data = await api(params.userid);
    console.log(data)
    return(
        <h1>
           hello { data.name }
        </h1>
    )
}