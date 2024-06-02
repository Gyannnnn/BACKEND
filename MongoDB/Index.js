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


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("Connectd To The MongoDb Successfully");
}).catch((err) => {
    console.log(err);

})

// creation of schema

const student = new mongoose.Schema({
    Name: String,
    Age: Number,
    Workout: Boolean

})
// creation of model
const Student = mongoose.model("StudentsData", student);

const data = async () => {
    const gyan = new Student({
        Name: "Gyanranjan Patra",
        Age: 20,
        Workout: true
    })
    const gyan2 = new Student({
        Name:"Runa",
        Age:90,
        Workout:false
    })

    await gyan.save()
    await gyan2.save()
}
data()