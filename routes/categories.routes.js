const express = require("express");// express require
const catroute = express.Router(); //router call

const { insertCategories, activeStatus, nameUpdate, searchById, deleteCat } =require("../controllers/categories.controller"); //controller

catroute.post("/cat_routes", insertCategories );//insert cat

catroute.put("/changeActiveStatus/:id", activeStatus);//change cat active status

catroute.put("/nameUpdate/:id", nameUpdate);//cat name update

catroute.get("/Cat_find/:id", searchById);//cat get detail by id

catroute.delete("/delete_cat/:id", deleteCat )//cat delete by id

module.exports = catroute;