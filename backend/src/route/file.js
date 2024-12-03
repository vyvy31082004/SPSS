const express = require("express");
const router = express.Router()
const FileController = require('../controller/FileController')

router.use('/',FileController)

module.exports = router;
