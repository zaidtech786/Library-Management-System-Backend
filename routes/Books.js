const express=require('express');
const router=express.Router();
const BookModel=require("../Models/BookSchema");
const IssueBookModel=require('../Models/IssueBookSchema')
const studentModel = require("../Models/StudentSchema")
const adminModel=require("../Models/AdminSchema");
const upload=require('../MiddleWare/File')


    // Working on a book data
    router.post("/books" , async (req,res)=>{
        const {bookName, Quantity, bookLang, bookAuthor} = req.body;
        const bookData= new BookModel({
            bookName,
            Quantity,
            bookLang,
            bookAuthor,
        });
        console.log(bookData)
        try{
            bookData.save()
            res.send({message:"Book added successfully"})
        }catch(err){
            res.send({message:"error"})
        }
    });

    // Fetching all Data 
    router.get("/getData",async(req,res)=>{
        BookModel.find( {} , (err,result)=>{ 
            if(err){
              res.send(err)
               }
                 else{
                 res.send(result);
                     }
             })
      });

    // Delete the data
      router.get("/delete/:id",async (req,res)=>{
        // const updatedvalue=req.body.updateVal;
        const id=req.params.id;
    try{
        await BookModel.findByIdAndRemove(id).exec()
        res.send("Deleted")
    }catch(err){
        res.send(err)
    }
    });

    // getting individual book data
    router.get("/getBooks/:id",async (req,res) => {
        const id =req.params.id;
        try{
          const BookData= await BookModel.findById(id);
          res.send(BookData);
        }catch(err){
            res.send(err);
        }
    })

    // Updating the data
    router.put("/editData/:id", async (req,res) => {
        let book = await BookModel.findById(req.params.id);
        book=req.body;
        const editBook=new BookModel(book);

            try{
                await BookModel.updateOne({_id: req.params.id}, editBook);
                return res.send({message:"Data Updated Successfully"})
            } catch (err){
                return res.status(409).json({ message: "Error!"});
            }
    })

    
    // Posting StudentId and BookId 
router.post('/postBookData',async(req, res)=> {
   const {studentId,bookId}=req.body;
   const stuBookData=new IssueBookModel({
    studentId:studentId,
    bookId:bookId,
   });
  console.log(stuBookData)
   if(stuBookData){
       res.send({message:"Your request has been send successfully"});
   }
   try{
    stuBookData.save();

   }catch(err){
       res.send(err)
   }
});



// Getting StudentId and BookId 
router.get('/getAllReq',async(req,res) => {
    IssueBookModel.find({})
    // .select("firstName lastName bookName bookLang approved approvedBy")
    .populate("studentId").populate("bookId" ).populate("approvedBy" ).then(data=>{
        res.send(data)
    })
})

// Delete the request
router.get("/deleteReq/:id",async (req,res)=>{
    const id=req.params.id;
try{
    await IssueBookModel.findByIdAndRemove(id).exec()
    res.send({message:"Book Request has been Deleted"})
}catch(err){
    res.send(err)
}
});

router.put("/acceptreq/:id",async(req,res) => {
    const {id} =req.params;
    const {bookId,adminId,studentId} = req.body
    let book;
    let student;
    let admin;
    let decBook;
    try{ 
      book = await IssueBookModel.findByIdAndUpdate(id,{
        approved:true,
        approvedBy:adminId,
      },{
        new:true,
        useFindAndModify:false
      }).populate("bookId").populate("approvedBy")

      student = await studentModel.findByIdAndUpdate(studentId,{
        issuedBook:book
      },{
        new:true,
        useFindAndModify:false
      })

      admin = await adminModel.findByIdAndUpdate(adminId,{
        approvedReq:bookId
      },{
        new:true,
        useFindAndModify:false
      })

       book.bookId.Quantity =  book.bookId.Quantity - 1;
       decBook = await BookModel.findByIdAndUpdate(bookId,{
        $inc: {Quantity: -1}
       },{
        new:true,
        useFindAndModify:false
      })
    }
    catch(err){
        console.log(err)
    }
    if(!book){
        return res.send({msg:"No book Found"})
    }
    else{
       return res.send({book,student,admin,decBook})
    }
    
});


router.delete("/deletereq/:id",async(req,res) => {
    const {id} = req.params
    let deleteBook;
    try {
        deleteBook = await IssueBookModel.findByIdAndRemove(id)
    } catch (error) {
        console.log(error)
    }
    if(!deleteBook){
        return res.send({msg:"NO BOOk Found"})
    }
    return res.send({msg:"Book has been deleted",deleteBook})
})

router.get("/getissuedbook/:studentId",async(req,res) => {
    const {studentId} = req.params;
    let student;
    try {
        student = await IssueBookModel.find({studentId,approved:true}).populate("bookId").populate("approvedBy")
    } catch (error) {
        console.log(error)
    }
    if(student ){
        return res.send({student})
    }
    return res.send({msg:"Student not found"})
})


module.exports=router;
