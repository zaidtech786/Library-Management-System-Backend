const multer=require('multer');
const path=require('path')
// const upload = require("../uploads")

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../uploads/')
    },
    filename:function(req,file,cb){
        console.log(file);
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    },
})


const upload=multer({storage:storage});

module.exports=upload;                                                              

