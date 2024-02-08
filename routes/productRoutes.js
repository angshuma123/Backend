const express = require("express");
const Router=express.Router();
const {getAllProducts,createAProduct}=require("../controllers/productController")
Router.get("/",getAllProducts);
Router.post("/",createAProduct);
module.exports=Router;
