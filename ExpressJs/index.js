const express = require('express');
const app = express()
app.get("/",function(req,res){
    res.end("Welcome To Home");
})
app.get("/Profile",function(req,res){
    res.end("Welcome To My Profile");
})
app.get("/Profile/User",function(req,res){
    res.end("Name:Gyanaranjan Patra Age :20");
})
app.get("/contact",function(req,res){
    res.end("Phone- 7978648082")
})
// app.get("/contact/wp",function(req,res){
//     res.end("Phone- 7978648082")
// })
app.get("/contact/wp",function(req,res){
    res.end("WhatsApp no : 7978648082")
})
app.get("/contact/instagram",function(req,res){
    res.end("id: gyan.css")
})

app.listen(9000)