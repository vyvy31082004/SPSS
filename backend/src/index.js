// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");
var bodyParser = require("body-parser");

const fileRoutes = require('./route/file');
const db=require ('./config/db');
db.connect();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use("/file",fileRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});