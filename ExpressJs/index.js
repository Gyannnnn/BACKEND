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
// app.get("/Profile/User",function(req,res){
//     res.send("Name:Gyanaranjan Patra Age :20");
// })
// app.get("/contact",function(req,res){
//     res.send("Phone- 7978648082")
// })

// app.get("/contact/wp",function(req,res){
//     res.send("WhatsApp no : 7978648082")
// })
// app.get("/contact/instagram",function(req,res){
//     res.send("id: gyan.css")
// })

app.listen(9000)