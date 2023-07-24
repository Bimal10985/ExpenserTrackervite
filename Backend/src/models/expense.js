import mongoose, { Types } from "mongoose";
const expenseSchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    type:{type:String,default:"expense"},
    amount:{type:Number,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,  ref:"User",required:true}
},{timestamp:true});
export default mongoose.model("Expense",expenseSchema);