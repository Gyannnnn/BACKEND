const mongoose = require('mongoose');
const user = require('./user');

const postShema = mongoose.userShema({
   postdata:String,
   user:String,
   data:{
        type:Date,
        default:Date.now
   }
});

module.exports =  mongoose.model("user",postShema)

