const mongoose=require('mongoose');
// fName:"",
// lName:"",
// Mno:"",
// email:"",
// lNo:"",
// Password:"",
// cPassword:"",
const adminSchema=new mongoose.Schema({
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

const AdminData=new mongoose.model("AdminData",adminSchema);
module.exports=AdminData;
