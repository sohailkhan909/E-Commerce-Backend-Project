const express = require ("express"); //express require
const sellerRoute = express.Router(); //router calling

const {addSeller, allSeller, selectedSeller, updateAll, deleteSeller} =require("../controllers/seller.controller"); //seller controller require 

sellerRoute.post("/insertSeller", addSeller);//seller add ap

sellerRoute.get("/listSeller", allSeller);//show all seller names

sellerRoute.get("/find_seller/:id", selectedSeller);//find by id seller

sellerRoute.put("/seller_Updation/:id", updateAll);// Update by Id

sellerRoute.delete("/delete_seller/:id", deleteSeller)//delete seller

module.exports = sellerRoute;