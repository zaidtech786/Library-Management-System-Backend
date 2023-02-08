
const adminModel=require("../Models/AdminSchema");
const jwt=require("jsonwebtoken")
const adminAuth =require("../routes/adminAuth");


const Authenticate = async()=> (req,res,next) => {
  try{
    const token=req.headers["x-access-token"]?.split(" ")[1];
    const verifyToken=jwt.verify(token,process.env.JWTPRIVATEKEY)
    const rootAdmin= adminModel.findOne({_id:verifyToken,token:token});
    if(!rootAdmin){
        throw new Error('User Not Found')
    }
    req.token=token;
    req.rootAdmin=rootAdmin;
    req.userID=rootAdmin._id;
  
    next();
  
   
  
  }catch(err){
      res.send({message:"Unauthorised: no data found"});
      console.log(err)
  }
}

module.exports=Authenticate;

