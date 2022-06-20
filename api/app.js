const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require("body-parser")
const db = require('./db/db')
const cors = require('cors');

db.dbconnect();
const app = express();
const PORT = 3002;
app.use(express.json());
app.use(express.urlencoded());


const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));


app.use(express.raw({ inflate: true, limit: '5mb', type: 'application/json' }));

app.use(function (req, res, next) {
  console.log(JSON.stringify(req.body));
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})



require('./routes/enquiry.js')(app);


app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);

});
