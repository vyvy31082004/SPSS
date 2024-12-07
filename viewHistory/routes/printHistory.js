const express = require('express');
const router = express.Router();
const PrintHistoryController = require('../controller/PrintHistoryController');




// Lấy lịch sử in
router.get('/history', PrintHistoryController.getPrintHistory);


// Thêm lịch sử in mới
router.post('/add', PrintHistoryController.addPrintHistory);


module.exports = router;
