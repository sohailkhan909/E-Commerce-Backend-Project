const express = require("express");
const SubCatRoute = express .Router();

const {addSubcat, changeActiveStatus, changeName, findOne, deleteOne} = require("../controllers/sub.cat")

SubCatRoute.post("/addSubCategory", addSubcat);//insert sub Categories

SubCatRoute.put("/ActiveStatus/:id", changeActiveStatus );//change sub cat active status

SubCatRoute.put("/updatename/:id", changeName);//Sub cat name update

SubCatRoute.get("/getdetailsById/:id", findOne);//sub cat get detail by id

SubCatRoute.delete("/deleteById/:id", deleteOne);//sub cat delete by id

module.exports= SubCatRoute;