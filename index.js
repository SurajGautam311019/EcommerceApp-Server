const express=require("express");
const dbConnect = require("./config/dbConnect");
const app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 8000;

dbConnect();
app.use('/',(req,res)=>{
    res.send('hello from server')
})
app.listen(PORT,()=>{
    console.log(`app is listening at PORT ${PORT}`);
})