const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/testingthedatabase");

const userShema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:Array
});

module.exports =  mongoose.model("user",userShema)

