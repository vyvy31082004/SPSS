const express = require("express");
const router = express.Router();
const FileController = require('../controller/FileController');

//const multer = require('multer');

//add a file
router.post ('/',FileController.addFile);


module.exports = router;
