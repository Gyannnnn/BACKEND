// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken');

// app.use(cookieParser());

// app.get("/",(req,res)=>{
//     let token = jwt.sign({Email:"Gyanranjan01patra@gmail.com"},'secret');
//     res.cookie("token",token);
//     res.send("Working")
// })
// app.get('/read',(req,res)=>{
//     let data = jwt.verify(req.cookies.token,'secret')
//     console.log(data)
//     res.send("Read Page")
// })

// app.listen(3000,()=>{
//     console.log("Working Fine")
// })




// prt 2

const cookieParser = require('cookie-parser');
const express = require('express');
const app  = express();
const path = require('path');
const  userModel = require('../AuthenticationAuthorisation/models/user');
const { model } = require('mongoose');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.render('index')

})
app.post("/create",async(req,res)=>{
    let {username,email,passward,age} = req.body
    let createdUser =    await userModel.create({
        username,
        email,
        passward,  
        age              
    })
    res.send(createdUser)
})

app.listen(3000,()=>{
    console.log("Working excelent")
})