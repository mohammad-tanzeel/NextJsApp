const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const db = require('./db/db')
const cors = require('cors');

db.dbconnect();
const app = express();
const PORT = 3002;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
  origin: 'https://localhost:3000'
}));


require('./routes/enquiry.js')(app);

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);

});
