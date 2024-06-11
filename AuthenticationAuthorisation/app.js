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
const app = express();
const path = require('path');
const userModel = require('../AuthenticationAuthorisation/models/user');
const { model } = require('mongoose');
const bcrypt = require('bcrypt');
const { hash } = require('crypto');
const jwt = require('jsonwebtoken');
const user = require('../AuthenticationAuthorisation/models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())

app.get("/", (req, res) => {
    res.render('index')

})
app.post("/create",  (req, res) => {
    let { username, email, passward, age } = req.body
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(passward, salt, async(err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,
                passward:hash,
                age
            })
            let token  = jwt.sign({email},'gyan');
            res.cookie('token',token);
            res.send(createdUser)
        })
    })

    
})
app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})
app.get("/login",(req,res)=>{
    res.render('login')
});
app.post('/login',async(req,res)=>{
    let logedUser  = await userModel.findOne({email:req.body.email})
    if(!logedUser) return res.send("Something Went Wrong");

    bcrypt.compare(req.body.passward,user.passward,(err,result)=>{
        if(result){
            let token  = jwt.sign({email:user.email},"gyan");
            res.cookie('token',token)
            res.send("Yus You can login");

        }
        else res.send("Something is Wrong")
    })
})

app.listen(3000, () => {
    console.log("Working excelent")
})