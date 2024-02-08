const express=require('express')
const app=express()
const port=8000
const userRoute=require("./routes/userRoutes")
const productRoute=require("./routes/productRoutes")
require("./config/dbConfig")
//const productRoute=require("./routes/productRoutes")
//app.use(express.json())

app.use("/user",userRoute)
app.use("/product",productRoute)
app.get("/",(req,res)=>{
    res.json({"Status":"Up and Running!"})
})
app.listen(port,(err)=>{
    if(!err){
        console.log('server is up and running on port',port)
    }
})