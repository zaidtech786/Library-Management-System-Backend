const express=require('express');
const router=express.router();

const adminModel=require("../Models/AdminSchema")

router.post('/adminsignup',async(req,res)=>{
const {firstName,lastName,MobileNo,email,libraryNo,Password}=req.body
const user=new adminModel({
    firstName,
    lastName,
    MobileNo,
    email,
    libraryNo,
    Password,
});
user.save( err => {
  if (err) {
      console.log(err)
  }
  else{
      res.send({message:"Successfully Registered"})
  }
})

})

