const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect("mongodb://localhost:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected Successfully");
})
.catch((err) => {
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});
const Product = mongoose.model("Product", productSchema);

// Create product
app.post("/api/v1/product/new", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

// Read products
app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
});

// Update product
app.put("/api/v1/product/:id", async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success: true,
        product
    });
});

// Delete product
app.delete("/api/v1/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
        success: true,
        message: "Deleted successfully"
    });
});

app.listen(4500, () => {
    console.log("Server running on port 4500");
});
