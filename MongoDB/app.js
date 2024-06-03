// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017").then(() => {
//     console.log("Connetctd To MongoDB Successfully");
// }).catch((err) => {
//     console.log(err)

// })


// const student = new mongoose.Schema({
//     Name: String,
//     Age: Number,
//     Workout: Boolean
// })

// const Student = new mongoose.model("Student", student)

// const data = async () => {
//     // const gyan  = new Student({
//     //     Name:"Gyanranjan Patra",
//     //     Age:20,
//     //     Workout:true
//     // })
//     // await gyan.save()
//     const gyan = await Student.create({
//         Name: "Runa",
//         Age: 204,
//         Workout: false
//     })
// }
// data();
// const mongoose = require("mongoose");

// // Connect to MongoDB with specified database name
// mongoose.connect("mongodb://localhost:27017/yourDatabaseName", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Connected To The MongoDB Successfully");
//     })
//     .catch((err) => {
//         console.error("Error connecting to MongoDB:", err);
//     });

// // Creation of schema
// const studentSchema = new mongoose.Schema({
//     Name: String,
//     Age: Number,
//     Workout: Boolean
// });

// // Creation of model
// const Student = mongoose.model("Student", studentSchema);

// // Async function to query data
// const data = async () => {
//     try {
//         // Find students with Age equal to 6
//         const students = await Student.find({ Age: { $eq: 6 } });
//         console.log(students);
//     } catch (err) {
//         console.error("Error querying data:", err);
//     }
// };

// // Ensure the connection is open before querying
// mongoose.connection.once('open', () => {
//     data();
// });



// const data = async () => {
//     const gyan = new Student({
//         Name: "Gyanranjan Patra",
//         Age: 20,
//         Workout: true
//     })
//     const gyan2 = new Student({
//         Name:"Runa",
//         Age:90,
//         Workout:false
//     })

//     await gyan.save()
//     await gyan2.save()
// }
// data()





// SHERYIANS CODING SCHOOL 

const { name } = require("ejs");
const userModel = require ("./usermodel")
const express = require("express");
const app  = express();

app.get('/',(req,res)=>{
    res.send("Working Fine");
    console.log("👍")
})
app.get('/read', async(req,res)=>{
    let users = await userModel.find();
    res.send(users)
})
app.get('/update', async(req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username:"gyan.css"},{ name:"Patra"},{next:true})
    res.send(updatedUser);

})
app.get('/create', async(req,res)=>{
    let createduser = await userModel.create({
        name:"Lipsa",
        username:"aashilipsa",
        email:"lipsa2002@gmail.com"
    })
    res.send(createduser)

})
app.listen(3000)