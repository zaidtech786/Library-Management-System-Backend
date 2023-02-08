const dotenv=require("dotenv")
const express=require('express')
const cors=require('cors');
const app=express()
const bodyParser=require('body-parser')

app.use(express.json())
app.use(express.urlencoded());
app.use(cors())
app.use(bodyParser.json())

// Getting Routes files
const adminRoutes= require("./routes/adminAuth");
app.use(adminRoutes)
const studentRoutes= require("./routes/StudentAuth");
app.use(studentRoutes)
const bookRoutes=require("./routes/Books")
app.use(bookRoutes);
const middleWare=require("./MiddleWare/Authenticate")
app.use(express.urlencoded({extended:false}))

// Getting MongoDb Setup File
const MongoConnection=require("./conn");


const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully on port ${PORT}`)
});