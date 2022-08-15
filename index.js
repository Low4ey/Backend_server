const express=require("express")
const mongoose = require('mongoose');
const app=express();
const url="mongodb+srv://a2zgamerz:qwerty12345@cluster0.zwrdm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on("open",()=>{
    console.log("DB connected !!!!");
})

const testRoute=require("./routes/test")

app.use(express.json())

app.use("/",testRoute)



app.listen(11090);