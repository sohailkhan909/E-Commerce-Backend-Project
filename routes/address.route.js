const express = require("express"); //express require
const route = express.Router();// express route call
const {addInsert, AddallList, selectedAddress, updateOne, deleteone } = require("../controllers/address.controller")

route.post("/addresspath2", addInsert);// insert address

route.get("/list_All_address", AddallList);//show all address

route.get("/addressFind/:id", selectedAddress);//show selected id

route.put("/UpdatedById/:id",updateOne); //update by id

route.delete("/delete/:id", deleteone); //delete by id

module.exports = route;