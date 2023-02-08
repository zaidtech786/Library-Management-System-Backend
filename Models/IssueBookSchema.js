const mongoose = require("mongoose");

const requestBookSchema = new mongoose.Schema({
  bookId: {
    type:  mongoose.Schema.ObjectId,
    ref: 'BookData',
    required: true,
  },
  studentId: 
    {
      type: mongoose.Schema.ObjectId,
      ref: 'StudentData',
      required: true,
    },
  
  approved:{
      type:Boolean,
      default:false,
  },
  approvedBy:{
      type:mongoose.Schema.ObjectId,
      ref:'AdminData'
  },
},
{
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
}
);
const IssueBook = new mongoose.model("IssueBook", requestBookSchema);
module.exports = IssueBook;
