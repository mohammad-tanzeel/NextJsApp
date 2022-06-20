const mongoose = require('mongoose');

exports.dbconnect = () => {
    mongoose.connect('mongodb://localhost/realestate', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //  useFindAndModify: false,
        //  useCreateIndex: true
    }).then(() => {
        console.log('Connection successful!');
    }).catch((e) => {
        console.log(e); 
        console.log('Connection failed!');
    })
}