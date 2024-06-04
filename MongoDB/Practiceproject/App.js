const express =  require("express");


const app = express();
const path = require('path');
const userModel = require("./models/User")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"Public")));


app.get("/",(req,res)=>{
    res.render("index") 

})
app.get("/read",(req,res)=>{
    res.render("Read") 

})
app.post("/create",async(req,res)=>{
    let {name,email,url} = req.body;
    let createdUser = await userModel.create({
        name,email,url
    })
    res.send(createdUser);
    

})

app.listen(3000)