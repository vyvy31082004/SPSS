const express = require('express');
const app = express()
const route = require('./route')
const port = 3000


const db = require('./config/db');
db.connect();
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})