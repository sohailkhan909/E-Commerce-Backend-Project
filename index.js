const express =require ("express"); // express require

const db = require("../E-Commerce-Backend-Project/Database/db"); //database add

const sellerSchema = require("../E-Commerce-Backend-Project/models/seller.schema") //seller Schema

const app = express(); // express call

app.use(express.json());//middleware js to json /json to js

const Address_route = require("../E-Commerce-Backend-Project/routes/address.route"); //Address route
const Categories_routes = require("../E-Commerce-Backend-Project/routes/categories.routes"); //categroies route

//address APi

app.use("/addresspath1", Address_route);//insert address

app.use("/showAllAddress",Address_route);//show all address

app.use("/selectedaddresses", Address_route);//show selected id

app.use("/updateone", Address_route);// Update by Id

app.use("/deleteOne", Address_route);//delete api






//seller add ap
app.post("/sellerAdd", (req, res)=>{
    let sellname = req.body.name;
    let sellShop = req.body.shopName;
    let sellnum = req.body.number;
    let sellemail = req.body.email;
    let sellpass = req.body.password;
    let sellerAll = new sellerSchema({name:sellname, shopName:sellShop, number:sellname, email:sellemail, password:sellpass})
    console.log(sellerAll);
    sellerAll.save((err, result)=>{
        if (err) {
            return res.status(401).json({msg:"Seller Not insert", errr:err})
        } else {
            return res.status(200).json({msg:"Seller inserted Successfully", reslt:result})
        }
    })
})

//show all seller names
app.get("/showAllSeller", (req, res)=>{
    sellerSchema.find((err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Data Not Found", error:err})
        } else {
            return res.status(302).json({msg:"All Seller Names Find", result:result})
        }
    })
})


//find by id seller
app.get("/find_seller/:id", (req, res)=>{
    let sellId= req.params.id
    sellerSchema.findById({_id:sellId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"seller Available", result:result})
        }
    })
})

// Update by Id
app.put("/seller_Updation/:id",(req,res)=>{
    let sellId = req.params.id;
    let updateName = req.body.name;
    let updateShop = req.body.shopName;
    let updatenum = req.body.number;
    let updateEmail = req.body.email;
    let updatepass = req.body.password;
    let updateData = {id:sellId, name:updateName, shopName:updateShop, number:updatenum, email:updateEmail, password:updatepass}
    console.log(updateData);
    sellerSchema.findOneAndUpdate({_id:sellId}, updateData, (err,result)=>{
        if(err){
            return res.status(304).json({msg:"Not Modify",error:err})
        }else{
            return res.status(200).json({msg:"Seller Details Update successfully",result:result})
        }
    })
})


//delete seller
app.delete("/delete_seller/:id", (req, res)=>{
    let sellId = req.params.id;
    sellerSchema.findByIdAndDelete({_id:sellId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete Seller Via Id", result:result})
        }
    })
})

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
})
