const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.get("/",(req,res)=>{
    let token = jwt.sign({Email:"Gyanranjan01patra@gmail.com"},'secret');
    res.cookie("token",token);
    res.send("Working")
})
app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token,'secret')
    console.log(data)
    res.send("Read Page")
})

app.listen(3000,()=>{
    console.log("Working Fine")
})
