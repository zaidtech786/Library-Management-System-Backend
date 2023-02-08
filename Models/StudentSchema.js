
const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({
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
     },
     issuedBook:[
      {
        type:mongoose.Schema.ObjectId,
        ref:"IssueBook"
      }
     ]
},{
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const StudentData=new mongoose.model("StudentData",StudentSchema);
module.exports=StudentData;
