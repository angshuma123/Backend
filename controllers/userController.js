const User=require("../models/User")
const getAllUsers=(req,res)=>{
User.find({}).then((result)=>{
    res.json(result);
}).catch((err)=>{
    res.json({"message":"Error fetching records"})
})
}
const createAUser=(req,res)=>{
    const newObj=new User({
        firstName:"Raghu",
        lastName:"Sharma",
        email:"raghu@gmail.com"
    });
    newObj.save().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json({"message":err});
    })
}
module.exports={
    getAllUsers,createAUser
}