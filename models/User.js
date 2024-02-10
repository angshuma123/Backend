const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: String,
    email:{
        type : String,
        unique : true,
    }
})
const User=mongoose.model("User",userSchema);
module.exports=User;