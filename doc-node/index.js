const express = require("express");
const mongoose = require('mongoose');
const Cors = require('cors');

const app = express();
app.use(Cors())
mongoose.connect("mongodb://pepcoding:password@mongo:27017",{dbName:'pepdb'})
.then(() => console.log("succesfully connected to db"))
.catch((e) => console.log(e));

const avengerSchema = new mongoose.Schema({
    name:{
        type : String
    }
})

const avengers = mongoose.model('avengers',avengerSchema);

app.get("/",async (req,res) => {
    const data = await avengers.find()
    res.send(data);
})

app.get("/add-data", async (req,res) => {
    await avengers.create({
        name : "Spiderman"
    })
    res.send("Added your data in the avengers database")
})
      
// app.get("/",(req,res) => {

//     res.send("<h1>hello</h1>");
// })


const port = process.env.PORT || 5000 ;

app.listen(port, () => console.log(`listining on the port ${port}`));