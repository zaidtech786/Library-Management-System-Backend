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
     libraryNo:{
        type:Number,
         required:true,
     },
     Password:{
        type:String,
         required:true,
     },
});

const StudentData=new mongoose.model("StudentData",StudentSchema);
module.exports=StudentData;
