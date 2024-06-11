const express = require('express');
const app = express();
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get("/", (req, res) => {
    res.send("Working Fine");

});
app.get("/create",async(req,res)=>{
    let user = await userModel.create({
        username:'gyancss',
        email:'gyan@gmail.com',
        age:20
    })

    res.send(user);
});
app.get("/post/create",async(req,res)=>{
    let post = await postModel.create({
        postdata:"Hello Guys !!",
        user:'6668155a906f8116a33ce24b',

    })
    let user = await userModel.findOne({_id:'6668155a906f8116a33ce24b'})
    user.posts.push(post._id)
    await user.save()
    res.send({post,user});
});

app.listen(3000, (err) => {
    if (err) console.log(err)
    else console.log("Working Fine")


})