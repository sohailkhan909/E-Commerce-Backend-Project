const mongoose = require("mongoose"); // require mongoose

//Database Connection
let url = "mongodb://localhost:27017/E-Commerce_Project" //1. mongodb link & Database name
let db = mongoose.connect(url , (err)=>{
    if (err) {
        console.log("Database Connection Failed..!!!");
    } else {
        console.log("DataBase Connected...");
    }
})
module.exports = db;