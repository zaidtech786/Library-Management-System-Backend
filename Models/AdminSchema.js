const mongoose=require('mongoose');
const jwt=require("jsonwebtoken")

const adminSchema=new mongoose.Schema(
    {
    firstName:{
       type:String,
        required:true,
    },
    lastName:{
        type:String,
         required:true,
     },
     Mobileno:{
        type:Number,
         required:true,
     },
     email:{
        type:String,
         required:true,
     },
     Password:{
        type:String,
        //  required:true,
     },
     approvedReq:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"IssueBook"
        }
     ]
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
},
);


const AdminData=new mongoose.model("AdminData",adminSchema);
module.exports=AdminData;
