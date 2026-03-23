export async function GET(request , content){
    const params = await content.params
    console.log(params)
    return new Response("all are catch all route  ")
}