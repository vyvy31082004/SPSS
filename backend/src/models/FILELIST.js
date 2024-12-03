// /model/fileModel.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    pagenumber: { type: String},
    size : { type:String},
    filetype: {type:String}
});

module.exports = mongoose.model('File', fileSchema);
