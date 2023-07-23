import mongoose, { Types } from "mongoose";
const incomeScheme=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    type:{type:String,default:"income"},
    amount:{type:Number,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,  ref:"User",required:true}
},{timestamp:true});
export default mongoose.model("Income",incomeScheme);