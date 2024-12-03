const FILELIST= require('../models/FILELIST');

const FileController = {
    addFile: async(req,res) => {
        try {
            newFile= new FILELIST (req.body);
            savedFile = await newFile.save();
            res.status(200).json(savedFile);
        } catch (error) {
            res.status(500).json(error);   
        }
    }
}

module.exports = FileController;