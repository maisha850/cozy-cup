import { ObjectId } from "mongodb"

const { dbConnect, collections } = require("@/lib/dbConnect")

export const getItems=async(req, res)=>{
const hotCoffee = await dbConnect(collections.ITEMS).find().toArray()
return hotCoffee.map(coffee=>({

    ...coffee , _id:coffee._id.toString()
}))
}
export const getSingleItems=async(id)=>{
if(id.length!== 24){
    return {}
}
const query = {_id : new ObjectId(id)}
const item= await dbConnect(collections.ITEMS).findOne(query)
return {...item , _id: item._id.toString()} || {}
}