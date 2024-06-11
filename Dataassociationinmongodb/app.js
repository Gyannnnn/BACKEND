const express = require('express');
const app = express();
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get("/", (req, res) => {
    res.send("Working Fine");

});
app.get("/create",(req,res)=>{
    res.send("Working")
});

app.listen(3000, (err) => {
    if (err) console.log(err)
    else console.log("Working Fine")


})