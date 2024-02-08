const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cvtSept').then(()=>{
    console.log("Successfully get connected to the db")
}).catch((err)=>{
    console.log("Error in connecting to the database")
});