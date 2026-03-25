import { product } from "../schema/page";

export async function PUT(request , content) {

    await mongoose.connect(process.env.MONGODB);
    const data = product.findOne({});
   const reuslt = await content.params

    console.log(reuslt ,"hello")

    return Response.json({ result: "put success fully" });
}