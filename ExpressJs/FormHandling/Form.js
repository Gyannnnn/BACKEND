const express = require('express');
const app = express()
app.use(function(req,res,next){
     console.log("Middleware Is Running !!!!");
     next();
});
app.use(function(req,res,next){
   console.log("Middle ware Is working fine");
   next();                                                                                                                                                                                                                                              
   
})
app.get("/",function(req,res){
    res.send("Welcome To Home");
})
app.get("/Profile",function(req,res){
    res.send("Welcome To My Profile");
})

app.listen(9000)