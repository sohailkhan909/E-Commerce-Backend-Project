const express =require ("express"); // express require

const db = require("../E-Commerce-Backend-Project/Database/db"); //database add

const app = express(); // express call

app.use(express.json());//middleware js to json /json to js

const Address_route = require("../E-Commerce-Backend-Project/routes/address.route"); //Address route
const Categories_routes = require("../E-Commerce-Backend-Project/routes/categories.routes"); //categroies route
const seller_route = require("../E-Commerce-Backend-Project/routes/seller.route") //seller route


//address APi

app.use("/addresspath1", Address_route);//insert address

app.use("/showAllAddress",Address_route);//show all address

app.use("/selectedaddresses", Address_route);//show selected id

app.use("/updateone", Address_route);// Update by Id

app.use("/deleteOne", Address_route);//delete api





//Seller Apis

app.use("/sellerAdd", seller_route)//seller add ap

app.use("/showAllSeller", seller_route)//show all seller names

app.use("/search_seller", seller_route )//find by id seller

app.use("/upToDateSeller",seller_route)// Update by Id

app.use("/dellSeller", seller_route)



//categories apis

app.use("/catInsert", Categories_routes);//insert cat

app.use("/changeStatus", Categories_routes);//change cat active status

app.use("/name_update", Categories_routes);//cat name update

app.use("/findname", Categories_routes);//cat get detail by id

app.use("/deletecat", Categories_routes )//cat delete by id



//server creation
const PORT = 5000;
app.listen (PORT, (err)=>{
    if (err) {
        console.log("Server Down");
    } else {
        console.log(`Server Running on Port No. ${PORT}`);
    }
});