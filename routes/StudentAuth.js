const express=require('express');
const router=express.Router();
const StudentModel=require("../Models/StudentSchema");
const jwt=require("jsonwebtoken");
let JWTKEY='ZAID';

// Student signup authentication
router.post("/studentsignup",async(req,res)=>{
    const {firstName,lastName,Mobileno,email,Password}=req.body;
    StudentModel.findOne({email:email} , (err,user)=>{
            if(user){
                res.send({message:"user already registered"})
            }
            else{
                const User=new StudentModel({
                    firstName,
                    lastName,
                    Mobileno,
                    email,
                    Password,
                });
                try{
                    User.save();
                    res.send({message:"SignUp Successfully"})
                }catch(err){
                    res.send({message:"error"})
                }
            }
        })
    
    })
    
    router.post('/studentsignin',async (req,res)=>{
        const { email, Password } = req.body;
        console.log(req.body)
        if (!email && !Password) {
          return res.send({ message: "Please Fill all the Credential" });
        }
        let user;
      
        StudentModel.findOne({ email }, (err, user) => {
          if (!user) {
            res.send({ error: "User not Found ! " });
          } else {
            if ( req.body.Password !== user.Password) {
              res.send({ error: "Password Is Incorrect" });
            } else {
              let Token = jwt.sign({ _id: user._id }, JWTKEY, { expiresIn: 2 });
              console.log(Token,user);
              res.send({ Message: "Login Successfully", Token, user });
            }
          }
        });
    });
      


    // Add Student to the dataBase
    router.post("/poststudata",async(req,res)=>{
        const {firstName,lastName,email,Mobileno}=req.body;
        const studentData=new StudentModel({
            firstName,
            lastName,
            email,
            Mobileno,
        });
        try{
             studentData.save()
            res.send({message:"Student Added Successfully"})
        }
        catch(err){
            console.log(err)
        }
    
    });
    
    // Fetching All Student Data 
    router.get("/getStuData",async(req,res)=>{
        let student;
       try{
        student = await StudentModel.find().populate("issuedBook")
       }catch(err){
        console.log(err)
       }
       if(!student){
       return res.send({msg:"Students not found"})
       }
       return res.send({student})
    })

    // getting individual student data
    router.get("/getStudent/:id",async (req,res) => {
        const id =req.params.id;
        try{
          const stuData= await StudentModel.findById(id).populate("issuedBook")
          res.send(stuData);
        }catch(err){
            res.send(err);
        }
    })

    // Updting Student data
    router.put("/editStudent/:id", async (req,res) => {
        let student = await StudentModel.findById(req.params.id);
        student=req.body;
        const editStudent=new StudentModel(student);

            try{
                await StudentModel.updateOne({_id: req.params.id}, editStudent);
                return res.send({message:"Data Updated Successfully"});
            } catch (err){
                return res.send(err)
            }
    });
    
    // Delete Student Data
   router.get("/delete/:id",async(req,res) => {
     const {id} =req.params;
     try {
        await StudentModel.findByIdAndRemove(id).exec();
        res.send({message:"Deleted"})
     } catch (error) {
         res.send(error)
     }
   });  

   


module.exports=router;
