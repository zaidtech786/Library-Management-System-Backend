
const mongoose=require('mongoose');
const dotenv=require("dotenv");

dotenv.config( {path: "./config.env"});

const DB=process.env.DATABASE;
// const PORT= process.env.PORT;


    mongoose.connect(DB,
        {
            useUnifiedTopology:true,
            useNewUrlParser: true,
        }).then( () =>{
            console.log("Connection Successfull")
        }).catch( (err)=>{
            console.log("No Connection",err)
        })



    