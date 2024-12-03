const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FILELIST = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });

module.exports=mongoose.model('FILELIST',FILELIST);  
