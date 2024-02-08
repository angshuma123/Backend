const getAllUsers=(req,res)=>{
res.send("Welcome to get user route")
}
const createAUser=(req,res)=>{
    res.send("Welcome to post user route")
}
module.exports={
    getAllUsers,createAUser
}