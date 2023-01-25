const express = require("express");
const PORT = 5000;

const db = require("./config/mongoose")

const app = express();

const bodyParse = require('body-parser');

const authroute = require("./routers/SignIO")

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.use('/getdata',authroute)

app.post("/",(req,res) => {
    res.json("NICE");
})

// app.post('/getdata', (req,res) => {
//     const id = req.body.id;
//     console.log(`${id}`);
//     res.json({sucess:true,data: id,message: "Got the id"});
// })

app.listen(PORT, () => console.log("Server Started On Port "+PORT));