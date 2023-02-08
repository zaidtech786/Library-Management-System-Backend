const express=require('express');
const router=express.Router();
const jwt=require("jsonwebtoken");
const authenticate=require("../MiddleWare/Authenticate")
const cookieParser=require("cookie-parser")
const adminModel=require("../Models/AdminSchema");
let JWTKEY='ZAID';


// Admin register authentication
router.post("/adminsignup",async(req,res)=>{
    const {firstName,lastName,Mobileno,email,Password}=req.body;
    adminModel.findOne({email:email} , (err,user)=>{
            if(user){
                res.send({message:"user already registered"})
            }
            else{
                const User=new adminModel({
                    firstName,
                    lastName,
                    Mobileno,
                    email,
                    Password,
                });
                User.save( err => {
                  if (err) {
                      console.log(err)
                  }
                  else{
                      res.send({message:"Successfully Registered"})
                  }
                })
            }
        })
    
    })
    
    
    // Admin login  authentication
    // router.post('/adminsignin', async (req,res)=>{
    //     const email=req.body.email;
    //     const password=req.body.password;
    //     try{
    //         adminModel.findOne({email:email}, async(err,user)=>{
    //             if(user){
                        
    //                 const accessToken= jwt.sign({firstName:user.firstName,email:user.email},jwKey,{expiresIn:"2h"});
    //                 res.send({accessToken,user})
    //                 console.log(accessToken)
    //                 return
    //             }
    //             else{
    //                return res.send({auth:false,message:"User not registered "})
    //             }
                
    //             if(password==user.Password){
    //                 res.send({message:"Login Successfull",user:user})
    //             }
    //             else{
    //                 res.send({auth:false,message:"Incorrect password"})
    //             }
                
              
    //         });
    //     }catch(err){
    //         res.send(err)
    //     }
       
    // });

    router.post('/adminsignin', async (req,res)=>{
        const { email, Password } = req.body;
        if (!email && !Password) {
          return res.send({ message: "Please Fill all the Credential" });
        }
        let user;
      
        adminModel.findOne({ email }, (err, user) => {
          if (!user) {
           return res.send({ error: "User not Found ! " });
          } else {
            if (req.body.Password !== user.Password) {
              return res.send({ error: "Password Is Incorrect" });
            } else {
              let token = jwt.sign({ _id: user._id }, JWTKEY, { expiresIn: 2 });
              console.log(token);
      
            return res.send({ Message: "Login Successfully", token, user });
            }
          }
        });
    });
      

    // Add data 
router.post("/postfacultyData",async(req,res)=>{
    const {firstName,lastName,email,Mobileno}=req.body;
    const FacultyData=new adminModel({
        firstName,
        lastName,
        email,
        Mobileno,
    });
    try{
        FacultyData.save()
        res.send({message:"Faculty Added Successfully"})
    }
    catch(err){
        console.log(err)
    }

})

// getting all data from database
router.get("/getfacdata",async (req,res) => {
    adminModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
})

   // getting individual admin data
   router.get("/getFaculty/:id",async (req,res) => {
    const id =req.params.id;
    try{
      const facData= await adminModel.findById(id);
      res.send(facData);
    }catch(err){
        res.send(err);
    }
})

// Updting Admin data
router.put("/editFaculty/:id", async (req,res) => {
    let faculty = await adminModel.findById(req.params.id);
    faculty=req.body;
    const editFac=new adminModel(faculty);

        try{
            await adminModel.updateOne({_id: req.params.id}, editFac);
            return res.send({message:"Data Updated Successfully"});
        } catch (err){
            return res.send(err)
        }
})


// Delete Admin Data
router.get("/deletefac/:id",async(req,res) => {
 const {id} =req.params;
 try {
    await adminModel.findByIdAndRemove(id).exec();
    res.send({message:"Data has been deleted"})
 } catch (error) {
     res.send(error)
 }
});  

// Getttng data of admin which are login to the server
router.get("/profile",authenticate,(req,res,next) => {
     console.log("helo profile");
    res.send(req.rootAdmin)
    next()
}); 


module.exports=router;