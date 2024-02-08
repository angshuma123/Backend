const getAllProducts=(req,res)=>{
    res.send("Welcome to the get product route")
};
const createAProduct=(req,res)=>{
    res.send("Welcome to the post product route ")
}
module.exports={
    getAllProducts,createAProduct
}