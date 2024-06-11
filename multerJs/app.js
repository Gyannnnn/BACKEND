const express = require('express');
const app = express();
const path = require('path')
// const multer = require('multer')
const crypto = require('crypto')
const multerconfig =require('./config/multerconfig')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs')




// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/images/uploads')
//     },
//     filename: function (req, file, cb) {
//         crypto.randomBytes(12, (err, bytes) => {
//             const fn = bytes.toString('hex') + path.extname(file.originalname)

//             cb(null, fn)

//         })

//     }
// })

// const upload = multer({ storage: storage })


app.get("/", (req, res) => {
    res.render('index')
});
// app.get("/test", (req, res) => {
//     res.render('test');
// });

// app.post('/upload',upload.single('image') , (req, res) => {
//     console.log(req.body)
// })

app.listen(3000, () => {
    console.log("Working Fine")
});