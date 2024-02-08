const express=require("express");
const {getAllUsers,createAUser}=require("../controllers/userController")
const Router=express.Router();
Router.get("/",getAllUsers);
Router.post("/",createAUser);
module.exports=Router;