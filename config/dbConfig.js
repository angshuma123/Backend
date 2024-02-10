const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cvtSept').then(()=>{
    console.log("Successfully get connected to the db")
}).catch((err)=>{
    console.log("Error in connecting to the database")
});