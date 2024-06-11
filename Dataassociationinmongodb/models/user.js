const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/testingthedatabase");

const userShema = mongoose.Schema({
    username:{
        type:String
    },
    email:String,
    age:Number,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]
});

module.exports = mongoose.model('user',userShema);