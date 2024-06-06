const express  = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


const productShema =  new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})
const Product = new mongoose.model("Product",productShema);


//create product
app.post("/api/v1/product/new",async(req,res)=>{
  const product =  await Product.create(req.body)
    res.status(200).json({
        succes:true,
        product
    })
})




app.listen(4500,()=>{
    console.log("Working Fine");
})