const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())

const adminModel=require("./Models/AdminSchema")
const StudentModel=require("./Models/StudentSchema")

mongoose.connect("mongodb+srv://szaid786:%40Siddiqui123%2A@cluster0.bl6nf.mongodb.net/test",
{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    
}).then( () =>{
    console.log("Connection Successfull")
}).then( (err)=>{
    console.log(err)
})

// Admin register authentication
app.post("/adminsignup",async(req,res)=>{
const {firstName,lastName,Mobileno,email,libraryNo,Password}=req.body;
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
                libraryNo,
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
app.post('/adminsignin',async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    adminModel.findOne({email:email}, (err,user)=>{
        if(user){
            if(password==user.Password){
                res.send({message:"Login Successfull",user:user})
            }
            else{
                res.send({message:"Incorrect password"})
            }
        }
        else{
            res.send({message:"User not registered "})
        }
    });
})

// Student signup authentication
app.post("/studentsignup",async(req,res)=>{
    const {firstName,lastName,Mobileno,email,libraryNo,Password}=req.body;
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
                    libraryNo,
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
    

    app.post('/studentsignin',async (req,res)=>{
        const email=req.body.email;
        const password=req.body.password;
        StudentModel.findOne({email:email}, (err,user)=>{
            if(user){
                if(password==user.Password){
                    res.send({message:"Login Successfull",user:user})
                }
                else{
                    res.send({message:"Incorrect password"})
                }
            }
            else{
                res.send({message:"User not registered "})
            }
        });
    })
    
    
app.listen(4000,()=>{
    console.log("Connected Successfully on port 4000...")
    console.log("Hello Backend")
});